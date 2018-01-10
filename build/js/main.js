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

    var map_finding = d3.select(".finding-panel");

    d3.json(dir.url("assets", "millenials_data.json"), function(error, data){
      if(error){

      }else{

        var map_wrap = d3.select(".map-container .map-panel");

        var map = mapd(map_wrap.append("div").node()).zoomable(true).responsive(true).zoomLevels(2);
        var state_layer = map.layer().geo(map.geo("state")).attr("stroke","#999999").attr("fill","none");
        var metro_layer = map.layer().geo(map.geo("metro").filter(function(d){return d.t100==1}))
                              .attr("stroke","#999999").attr("fill-opacity","0.9").data(data, "CBSA_Code");  

        //render map to div below map
        var legend_wrap = map_wrap.append("div").style("margin","0.5rem 2rem 0.25rem 2rem").classed("map-legend",true);
        map.legend.wrap(legend_wrap.node());  
                              
        var map_scenes = {
          "pop":{
              var:"MShare15",
              varname:"Millenials share of total population, 2015",
              text:["Among metropolitan areas, the 15 metropolitan areas with the highest shares of millennials are all in the fast-growing South and West, such as Austin, Colorado Springs, San Diego, and Los Angeles.", "The lowest millennial shares tend to be in Florida, such as Tampa and Miami, in the Northeast, such as Pittsburgh, and in the Midwest, such as Cleveland and Detroit."
              ],
              draw: function(){
                var fill = metro_layer.aes.fill("MShare15").quantile(['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c']);
                //var r = metro_layer.aes.r("MPop15").radii(0,30);     
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                }, "Millenial share of the population, 2015");  
                //map.legend.bubble(r.ticks([100000, 500000, 1000000]), format.num0, "Number of Millenials, 2015");
                //tooltip  

                map.draw();  
              }
            },
          "white":{
            var:"White",
            varname:'Share of millennials who are <b>white</b>, 2015',
            text: ["Among the largest 100 largest metropolitan areas, 30 are “minority white,” including Miami, Houston, Los Angeles, New York, Atlanta and Chicago. Conversely, 18 metropolitan areas have millennial populations that are at least 60% white, including Philadelphia, Charlotte, Tampa and Seattle. Only four of the largest 100 metropolitan areas house millennial populations where whites exceed 80%."],
            draw: function(){
                var fill = metro_layer.aes.fill("White").quantile(['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c']);
                //var r = metro_layer.aes.r("White").radii(0,30);   
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                }, "Share of the millennial population that is white, 2015");  
                //map.legend.bubble(r.ticks([100000, 500000, 1000000]), format.num0, "Number of Millenials, 2015");  

                map.draw();     
              }
          },
          "black":{
            var:"Black",
            varname:'Share of millennials who are <b>black</b>, 2015',
            text: ["In general, black millennials settle more often in Southern areas (including Atlanta, Dallas, Houston, and Miami, as well as New York, Philadelphia, and Washington, D.C.)"],
            draw: function(){
                var fill = metro_layer.aes.fill("Black").quantile(['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c']);
                //var r = metro_layer.aes.r("White").radii(0,30);   
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                }, "Share of the millennial population that is black, 2015");  
                //map.legend.bubble(r.ticks([100000, 500000, 1000000]), format.num0, "Number of Millenials, 2015");  

                map.draw();     
              }
          },
          "hispanic":{
            var:"Hispanic",
            varname:'Share of millennials who are <b>Hispanic</b>, 2015',
            text: ["Hispanic millennials settle more often in Southern areas (including Houston, Miami, Dallas, Los Angeles, as well as New York and Chicago)"],
            draw: function(){
                var fill = metro_layer.aes.fill("Hispanic").quantile(['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c']);
                //var r = metro_layer.aes.r("White").radii(0,30);   
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                }, "Share of the millennial population that is Hispanic, 2015");  
                //map.legend.bubble(r.ticks([100000, 500000, 1000000]), format.num0, "Number of Millenials, 2015");  

                map.draw();     
              }
          },
          "asian":{
            var:"Asian",
            varname:'Share of millennials who are <b>Asian</b>, 2015',
            text: ["Asian millennials settle more often in the West (including San Francisco, San Jose, and Seattle, as well as Chicago, Washington, D.C. and Houston)"],
            draw: function(){
                var fill = metro_layer.aes.fill("Asian").quantile(['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c']);
                //var r = metro_layer.aes.r("White").radii(0,30);   
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                }, "Share of the millennial population that is Asian, 2015");  
                //map.legend.bubble(r.ticks([100000, 500000, 1000000]), format.num0, "Number of Millenials, 2015");  

                map.draw();     
              }
          }
        }       

        var map_buttons_u = d3.select("#millennials-map .button-panel").selectAll("div").data(["pop", "white", "black", "hispanic", "asian"]);
        var map_buttons = map_buttons_u.enter().append("div").merge(map_buttons_u);
            map_buttons_u.exit().remove();

        map_buttons.html(function(d){
          return '<p class="no-select" style="font-size:0.85rem;text-transform:uppercase;">' + map_scenes[d].varname + '</p>';
        })        

        var poprank = format.ranker(data.map(function(d){return d.MPop15}));
        var sharerank = format.ranker(data.map(function(d){return d.MShare15}));

        var tooltip = function(obs){
          var tip = d3.select(this); 
          tip.html('<div class="tight-text"> <p><strong>' + obs.CBSA_Title + '</strong></p>' + 
                 '<p>In 2015, ' + format.num0(obs.MPop15) + ' Millenials lived in the metro area (' + poprank(obs.MPop15) + '), accounting for ' + 
                                  format.num1(obs.MShare15) + '%  of all residents (' + sharerank(obs.MShare15) + ')</p></div>');
        }

        metro_layer.tooltips(tooltip);    

        function button_select(d){
          map_buttons.classed("selected", function(dd, ii){
            return dd==d;
          });

          var scene = map_scenes[d];

          var p = map_finding.selectAll("p").data(scene.text);
          p.exit().remove()
          p.enter().append("p").merge(p).html(function(d){return d});

          scene.draw();

        }         

        map_buttons.on("mousedown", button_select);
       
        button_select("pop");    

      }
    })


  }


} //close main()


document.addEventListener("DOMContentLoaded", main);
