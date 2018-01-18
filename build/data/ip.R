library(tidyverse)
library(metromonitor)
library(readxl)
library(jsonlite)

pop <- read_xls("/home/alec/Projects/Brookings/millenials/build/data/Millennial Report_Appendices nw.xls", 
                sheet="BGTable A", range="B10:H109", col_names=FALSE)[seq(1,7,2)]
names(pop) <- c("Metro_", "MPop15", "MShare15", "YAGrowth1015")

pop$Metro <- sub("Nashville-Davidson--Murfreesboro--Franklin, TN", "Nashville-Davidson-Murfreesboro-Franklin, TN", pop$Metro_)

race <- read_xls("/home/alec/Projects/Brookings/millenials/build/data/Millennial Report_Appendices nw.xls", 
                 sheet="BGTable C", range="B10:J109", col_names=FALSE)[c(1,3:9)]
names(race) <- c("Metro", "White", "Black", "AIAN", "Asian", "TwoPlus", "Hispanic", "RTot")

edu <- read_xls("/home/alec/Projects/Brookings/millenials/build/data/Millennial Report_Appendices nw.xls", 
                sheet="BGTable E", range="B9:J108", col_names=FALSE)[c(1,3:7,9)]
names(edu) <- c("Metro", "LTHS", "HS", "SC", "BA", "ETot", "Pov")


merged <- full_join(pop, full_join(race, edu))
merged$Metro <- gsub("--", "-", merged$Metro)

mets <- metropops()[1:2]

mets$CBSA_Title <- gsub("--", "-", mets$CBSA_Title)

metro_data <- inner_join(mets, merged, by=c("CBSA_Title"="Metro"))

json <- toJSON(metro_data[-3], digits=5, na="null")

write_lines(json, "/home/alec/Projects/Brookings/millenials/assets/millenials_data.json")
