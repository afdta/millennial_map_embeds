import dir from "../../../js-modules/rackspace.js";
import degradation from "../../../js-modules/degradation.js";
import mapd from "../../../js-modules/maps/mapd.js";
import format from "../../../js-modules/formats.js";

//main function
function main(){


  //local
  dir.local("./");
  dir.add("assets", "assets");
  //dir.add("dirAlias", "path/to/dir");


  //production data
  //dir.add("dirAlias", "rackspace-slug/path/to/dir");
  //dir.add("dirAlias", "rackspace-slug/path/to/dir");
  var compat = degradation(document.getElementById("metro-interactive"));


  //browser degradation
  if(compat.browser()){
  
    var map_scenes = [
      {
        name:"pop",
        text:["Among metropolitan areas, the 15 metropolitan areas with the highest shares of millennials are all in the fast-growing South and West, such as Austin, Colorado Springs, San Diego, and Los Angeles.", "The lowest millennial shares tend to be in Florida, such as Tampa and Miami, in the Northeast, such as Pittsburgh, and in the Midwest, such as Cleveland and Detroit. (<b>Annotate map with these places.</b>)"
        ]
      },
      {
        name:"race",
        text: ["Among the largest 100 largest metropolitan areas, 30 are “minority white,” including Miami, Houston, Los Angeles, New York, Atlanta and Chicago. Conversely, 18 metropolitan areas have millennial populations that are at least 60% white, including Philadelphia, Charlotte, Tampa and Seattle. Only four of the largest 100 metropolitan areas house millennial populations where whites exceed 80%. <strong>MAP DATA NOT LOADED YET --  Will depict cultural generation gap or non-white share -- mouseover to get full breakdown (or, do we want to map, say, white or black share of Millenial pop.? ).</strong>", "In general, black millennials settle more often in Southern areas (including Atlanta, Dallas, Houston, and Miami, as well as New York, Philadelphia, and Washington, D.C.), Hispanic millennials settle more often in Southern areas (including Houston, Miami, Dallas, Los Angeles, as well as New York and Chicago), Asian millennials settle more often in the West ((including San Francisco, San Jose, and Seattle, as well as Chicago, Washington, D.C. and Houston), and white millennials settle most often in the largest metro areas, such as New York, Chicago, and Los Angeles."]
      },
      {
        name:"edu",
        text: ["Text on educational attainment... <strong>MAP DATA NOT LOADED YET</strong>", "[125 words] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lectus ut odio pretium tincidunt et in eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ut ornare nisi. Proin id mattis erat. Sed efficitur purus sit amet purus aliquet tincidunt. Pellentesque nec ornare arcu, at euismod diam. Phasellus ut nibh nec lectus gravida tristique non id ante. Etiam posuere lacus ac erat hendrerit interdum. Suspendisse feugiat pellentesque justo, et dignissim quam placerat quis. Duis ornare, odio non lobortis pellentesque, magna nulla viverra erat, at gravida sem enim id nisi. Nam vel luctus dui, in blandit sem. Phasellus accumsan ut turpis at rutrum. Integer sed imperdiet lorem, et malesuada turpis. Maecenas sit amet sodales elit. Integer eleifend finibus dui."]
      },
      {
        name:"poverty",
        text: ["Text on poverty rates... <strong>MAP DATA NOT LOADED YET</strong>"]
      }
    ]
    var map_buttons = d3.selectAll(".map-container .button-panel > div").data(map_scenes);

    var map_finding = d3.select(".finding-panel");

    function button_select(d, i){
      map_buttons.classed("selected", function(dd, ii){
        return dd.name==d.name;
      });

      var p = map_finding.selectAll("p").data(d.text);
      p.exit().remove()
      p.enter().append("p").merge(p).html(function(d){return d});

      //other maps not loaded yet
      d3.select(".map-container .map-panel").style("opacity", d.name == "pop" ? 1 : 0.25)

    }

    map_buttons.on("mousedown", button_select);

    button_select(map_scenes[0]);

    d3.json(dir.url("assets", "millenials_data.json"), function(error, data){
      if(error){

      }else{
        var map_wrap = d3.select(".map-container .map-panel");

        var map = mapd(map_wrap.append("div").node()).zoomable(true).responsive(true).zoomLevels(2);
        var state_layer = map.layer().geo(map.geo("state")).attr("stroke","#999999").attr("fill","none");
        var metro_layer = map.layer().geo(map.geo("metro").filter(function(d){return d.t100==1}))
                              .attr("stroke","#999999").attr("fill-opacity","0.9").data(data, "CBSA_Code");

        var fill = metro_layer.aes.fill("MShare15").quantile(['#bdd7e7','#6baed6','#3182bd','#08519c']);
        var r = metro_layer.aes.r("MPop15").radii(0,30); 

        //render map to div below map
        var legend_wrap = map_wrap.append("div").style("margin","0.5rem 2rem 0.25rem 2rem").classed("map-legend",true);
        map.legend.wrap(legend_wrap.node()); 

        map.legend.swatch(fill.ticks(), function(v){
          return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
        }, "Millenial share of the population, 2015");

        map.legend.bubble(r.ticks([100000, 500000, 1000000]), format.num0, "Number of Millenials, 2015");

        var poprank = format.ranker(data.map(function(d){return d.MPop15}));
        var sharerank = format.ranker(data.map(function(d){return d.MShare15}));

        var tooltip = function(obs){
          var tip = d3.select(this); 
          tip.html('<div class="tight-text"> <p><strong>' + obs.CBSA_Title + '</strong></p>' + 
                 '<p>In 2015, ' + format.num0(obs.MPop15) + ' Millenials lived in the metro area (' + poprank(obs.MPop15) + '), accounting for ' + 
                                  format.num1(obs.MShare15) + '%  of all residents (' + sharerank(obs.MShare15) + ')</p></div>');
        }

        metro_layer.tooltips(tooltip);    

        map.draw();    

      }
    })


  }


} //close main()


document.addEventListener("DOMContentLoaded", main);
