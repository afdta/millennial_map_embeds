library(tidyverse)
library(metromonitor)
library(readxl)
library(jsonlite)

pop <- read_xls("/home/alec/Projects/Brookings/millenials/build/data/Millennial Report_Appendices nw.xls", 
                sheet="BGTable A", range="B10:H109", col_names=FALSE)[seq(1,7,2)]
names(pop) <- c("Metro", "MPop15", "MShare15", "YAGrowth1015")

pop$Metro <- gsub("--", "-", pop$Metro)

mets <- metropops()[1:2]

mets$CBSA_Title <- gsub("--", "-", mets$CBSA_Title)

pop2 <- inner_join(mets, pop, by=c("CBSA_Title"="Metro"))

json <- toJSON(pop2, digits=5, na="null")

write_lines(json, "/home/alec/Projects/Brookings/millenials/assets/millenials_data.json")
