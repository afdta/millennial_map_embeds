import dir from "../../../js-modules/rackspace.js";
import degradation from "../../../js-modules/degradation.js";
import mapd from "../../../js-modules/maps/mapd.js";
import format from "../../../js-modules/formats.js";

//main function
function main(){


  //local
  //dir.local("./");
  //dir.add("assets", "assets");

  //production data
  dir.add("assets", "millennial-generation/assets");
  var compat = degradation(document.getElementById("metro-interactive"));


  //browser degradation
  if(compat.browser()){

    var map_finding = d3.select("#finding-panel");


    //add graphics
    d3.select("#graphic-cgen-gap").append("img").attr("src", dir.url("assets", "cgg.svg"));
    d3.select("#graphic-race").append("img").attr("src", dir.url("assets", "race.svg"));
    d3.select("#graphic-edu").append("img").attr("src", dir.url("assets", "edu.svg"));
    d3.select("#graphic-ownership").append("img").attr("src", dir.url("assets", "ownership.svg"));
    d3.select("#graphic-poverty").append("img").attr("src", dir.url("assets", "poverty.svg"));
    d3.select("#graphic-marriage").append("img").attr("src", dir.url("assets", "marriage.svg"));

    d3.json(dir.url("assets", "millenials_data.json"), function(error, data){
      if(error){
        //no-op
      } 
      else{

        var map_wrap = d3.select("#map-panel");


        //build svg filters
        var defs = map_wrap.append("div").style("height","1px").append("svg").append("defs");
        var filter = defs.append("filter").attr("id","feBlur").attr("width","150%").attr("height","150%");
        filter.append("feOffset").attr("result","offsetout").attr("in","SourceGraphic").attr("dx","6").attr("dy","6");
        filter.append("feColorMatrix").attr("result","matrixout").attr("in","offsetout").attr("type","matrix").attr("values","0.25 0 0 0 0 0 0.25 0 0 0 0 0 0.25 0 0 0 0 0 1 0");
        filter.append("feGaussianBlur").attr("result","blurout").attr("in","matrixout").attr("stdDeviation","6");
        filter.append("feBlend").attr("in","SourceGraphic").attr("in2","blurout").attr("mode","normal");

        var filter2 = defs.append("filter").attr("id","feBlur2").attr("width","150%").attr("height","150%");
        filter2.append("feOffset").attr("result","offsetout").attr("in","SourceGraphic").attr("dx","2").attr("dy","2");
        filter2.append("feColorMatrix").attr("result","matrixout").attr("in","offsetout").attr("type","matrix").attr("values","0.25 0 0 0 0 0 0.25 0 0 0 0 0 0.25 0 0 0 0 0 0.5 0");
        filter2.append("feGaussianBlur").attr("result","blurout").attr("in","matrixout").attr("stdDeviation","5");
        filter2.append("feBlend").attr("in","SourceGraphic").attr("in2","blurout").attr("mode","normal");      

        
        var map = mapd(map_wrap.append("div").node()).zoomable(true).responsive(true).zoomLevels(2);
        var us_layer = map.layer().geo(map.geo("us")).attr("filter","url(#feBlur2)");
        var state_layer = map.layer().geo(map.geo("state")).attr("stroke","#999999").attr("fill","#ffffff");
        var metro_layer = map.layer().geo(map.geo("metro").filter(function(d){return d.t100==1}))
                              .attr("stroke","#999999").attr("fill-opacity","0.9").data(data, "CBSA_Code").attr("r","8");  

        var title = d3.select("#map-title");

        //render map to div below map
        var legend_wrap = map_wrap.append("div").style("margin","0.5rem auto 0.25rem auto").classed("c-fix",true)
                                  .append("div").style("float","right").style("border-top","1px solid #aaaaaa")
                                  .style("padding","10px").classed("map-legend",true); 

        map.legend.wrap(legend_wrap.node()); 

        var pal = ['#c6dbef','#9ecae1','#6baed6','#3182bd','#08519c'];
        
        var map_var = null;  //used to highlight chart in tooltip                    
        var map_scenes = {
          "pop":{
              var:"MShare15",
              varname:"Millennials share of total population, 2015",
              button:"Overall",
              text:[
                "This interactive map presents statistics for the race/ethnicity breakdown and overall millennial population share for the nation’s 100 largest metropolitan areas. <b><em>Note: Hover over each metro area to view relevant statistics.</em></b>",
                "Racial and ethnic minorities make up more than half of the millennial population in 10 states, including California, Texas, Arizona, Florida, and New Jersey. In another 10 states, including New York, Illinois, and North and South Carolina, minorities comprise more than 40 percent of millennial residents. Notably, the District of Columbia is a sizeable 34.8 percent millennial.",
                "Among metropolitan areas, the 15 with the highest shares of millennials are all in the fast-growing South and West, such as Austin, San Diego, and Los Angeles. The lowest millennial shares tend to be in Florida, such as Tampa and Miami, in the Northeast, such as Pittsburgh, and in the Midwest, such as Cleveland and Detroit."
                ],
              draw: function(){
                var fill = metro_layer.aes.fill("MShare15").quantile(pal);    
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();  
              }
            },

          "white":{
            var:"White",
            varname:'Share of millennials who are <b>white</b>, 2015',
            button:"White",
            text:[
              "The largest white millennial settlements are in the biggest metropolitan areas—New York, Chicago, and Los Angeles—as well as Philadelphia, Boston, Dallas, and Washington, D.C.",
              "Among the 100 largest metropolitan areas, 18 have millennial populations that are at least 60 percent white, including Seattle, Charlotte, Tampa, and Philadelphia. Only four of the largest 100 metropolitan areas house millennial populations where whites exceed 80 percent (Knoxville, Tenn.; Provo Utah; Pittsburgh; and Spokane, Wash.). Conversely, 30 are “minority white,” including Miami, Houston, Los Angeles, New York, Atlanta and Chicago. ",
              '<a target="_blank" class="mpp-report-link" href="https://www.brookings.edu/wp-content/uploads/2018/01/2018-jan_brookings-metro_millennials-a-demographic-bridge-to-americas-diverse-future.pdf#page=17">Read more about millennials’ racial and ethnic diversity among metro areas and states on page 17</a>'
              ],
            draw: function(){
                var fill = metro_layer.aes.fill("White").quantile(pal);
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();     
              }
          },

          "black":{
            var:"Black",
            varname:'Share of millennials who are <b>black</b>, 2015',
            button:"Black",
            text:[
              "In general, black millennials settle more often in Southern areas (including Atlanta, Dallas, Houston, and Miami, as well as New York, Philadelphia, and Washington, D.C.). In Atlanta, Charlotte, and Detroit, blacks are the largest minority group among millennials.",
              "The largest black millennial settlement and young adult gain areas have a distinctly Southern bent. Atlanta ranks first in black young adult gains and second in the size of black millennial settlement. Other metropolitan areas that saw black young adult gain are Dallas, Houston, Washington, D.C., and Miami in the South, as well as New York and Philadelphia",
              '<a target="_blank" class="mpp-report-link" href="https://www.brookings.edu/wp-content/uploads/2018/01/2018-jan_brookings-metro_millennials-a-demographic-bridge-to-americas-diverse-future.pdf#page=17">Read more about millennials’ racial and ethnic diversity among metro areas and states on page 17</a>'
              ],
            draw: function(){
                var fill = metro_layer.aes.fill("Black").quantile(pal);
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();     
              }
          },

          "hispanic":{
            var:"Hispanic",
            varname:'Share of millennials who are <b>Hispanic</b>, 2015',
            button:"Hispanic",
            text:[
              "New York and Los Angeles are major settlement areas for Hispanic millennials. In general, Hispanic millennials settle more often in Southern areas—Houston, Miami, and Dallas—along with Riverside, Calif., and Chicago. Additionally, New York, Los Angeles, and Houston are top gainers for Hispanic millennials.",
              '<a target="_blank" class="mpp-report-link" href="https://www.brookings.edu/wp-content/uploads/2018/01/2018-jan_brookings-metro_millennials-a-demographic-bridge-to-americas-diverse-future.pdf#page=17">Read more about millennials’ racial and ethnic diversity among metro areas and states on page 17</a>'
              ],
            draw: function(){
                var fill = metro_layer.aes.fill("Hispanic").quantile(pal);  
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();     
              }
          },

          "asian":{
            var:"Asian",
            varname:'Share of millennials who are <b>Asian</b>, 2015',
            button:"Asian",
            text:[
              "New York and Los Angeles are major settlement areas for Asian millennials. In general, Asian millennials settle more often in the West, including in San Francisco, San Jose, and Seattle, along with Chicago and Washington, D.C. Additionally, New York, Los Angeles, and Houston are top gainers for Asian millennials.",
              '<a target="_blank" class="mpp-report-link" href="https://www.brookings.edu/wp-content/uploads/2018/01/2018-jan_brookings-metro_millennials-a-demographic-bridge-to-americas-diverse-future.pdf#page=17">Read more about millennials’ racial and ethnic diversity among metro areas and states on page 17</a>'
              ],
            draw: function(){
                var fill = metro_layer.aes.fill("Asian").quantile(pal);
                map.legend.swatch(fill.ticks(), function(v){
                  return format.num0(v[0]) + "% to " + format.num0(v[1]) + "%";
                });  
                map.draw();     
              }
          }
        }       

        var map_buttons_u = d3.select("#millennials-map .button-panel").selectAll("div").data(["pop", "white", "black", "hispanic", "asian"]);
        var map_buttons = map_buttons_u.enter().append("div").merge(map_buttons_u);
            map_buttons_u.exit().remove();

        map_buttons.html(function(d){
          return '<p class="no-select" style="font-size:0.85rem;text-transform:uppercase;text-align:center;">' + map_scenes[d].button + '</p>';
        })        

        //var poprank = format.ranker(data.map(function(d){return d.MPop15}));
        //var sharerank = format.ranker(data.map(function(d){return d.MShare15}));

        var tip_code = null;
        var scale = d3.scaleLinear().domain([0,100]).range([0,90]); //range in %
        var tooltip = function(obs){
          var tip = d3.select(this);

          if(tip_code !== obs.CBSA_Code){

            var p = tip.selectAll("p").data(['<strong style="font-size:17px;">' + obs.CBSA_Title + '</strong>', 
                                             '<em>Millennial share: ' + format.num1(obs.MShare15) + '% of pop.</em>',
                                             '<em>Millennials by race/ethnicity</em>'
                                            ]);

            p.enter().append("p").merge(p).html(function(d){return d}).style("font-size","15px")
                      .style("margin",function(d,i){return i==2 ? "11px 0px 3px 0px" : "4px 0px 7px 0px"})
                      .style("line-height","1.4em");


            var svg = tip.selectAll("svg").data([obs]);
            svg.exit().remove();

            var bar_g = svg.enter().append("svg").attr("width","100%").attr("height","200px").merge(svg).style("border-top","1px solid #aaaaaa")
                          .selectAll("g").data([{share: obs.White, fill: "#b2b2b2", label: "White"},
                                               {share: obs.Black, fill: "#5b5b5b", label: "Black"},
                                               {share: obs.Hispanic, fill: "#2fc4f2", label: "Hispanic"},
                                               {share: obs.Asian, fill: "#70ad47", label: "Asian"},
                                               {share: obs.AIAN, fill: "#ed7d31", label: "Am. Indian/Alaska Native"},
                                               {share: obs.TwoPlus, fill: "#ffc000", label: "2+ Races"}]);
                bar_g.exit().remove();
            var bar_ge = bar_g.enter().append("g");
                bar_ge.append("text").attr("y","12").attr("x",scale(0)+"%").style("font-size","13px");
                bar_ge.append("rect").attr("y","15").attr("height","10px").attr("x",scale(0)+"%")

            var g = bar_ge.merge(bar_g).attr("transform",function(d,i){
              return "translate(0," + (10 + (i*30)) + ")";
            })

            var rects = g.select("rect").attr("fill", function(d){return d.fill}).attr("width", function(d){return (scale(d.share)-scale(0))+"%"});
            var texts = g.select("text").text(function(d){return d.label + " (" + format.num1(d.share) + "%)"})
                          .style("font-weight", function(d){return d.label === map_var ? "bold" : "normal"});

            tip_code = obs.CBSA_Code;

            analytics('hover', 'share_of_millennials');
          }
        }

        metro_layer.tooltips(tooltip);    


        function button_select(d){
          map_buttons.classed("selected", function(dd, ii){
            return dd==d;
          });

          var scene = map_scenes[d];
          title.html(scene.varname).style("text-align","center").style("margin","1.5rem 0px 0px 0px").style("font-weight","bold");
          map_var = scene.var;

          var p = map_finding.selectAll("p").data(scene.text);
          p.exit().remove()
          p.enter().append("p").merge(p).html(function(d){return d});

          scene.draw();

        }         

        map_buttons.on("mousedown", function(d){
          button_select(d);

          analytics('menu_tap', 'share_of_millennials');
        });

        //initialize map       
        button_select("pop");    

      } //end draw block -- no error in data retrieval
    
    }); //end json data callback

  } //end compat browser block

  //ANALYTICS
  function analytics(action, label){
    
    //default arg for label is 'null'
    if(arguments.length < 2 || label == null){
      label = 'null';
    }

    dataLayer.push({
                    'event': 'Interactive',
                    'category': 'Interactive',
                    'action': action,
                    'label': label
                  });
  }

} //close main()


document.addEventListener("DOMContentLoaded", main);
