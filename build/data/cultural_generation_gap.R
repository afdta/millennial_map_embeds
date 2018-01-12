library(tidyverse)
library(readxl)
library(ggplot2)
  
shares15 <- read_excel("/home/alec/Projects/Brookings/millenials/build/data/Millennial Report_Figures_Maps_Tables nw.xlsx", 
                       sheet="Figures", range="B194:E197", col_names=FALSE) %>% mutate(year=2015)

shares25 <- read_excel("/home/alec/Projects/Brookings/millenials/build/data/Millennial Report_Figures_Maps_Tables nw.xlsx", 
                       sheet="Figures", range="G194:I197", col_names=FALSE) %>% bind_cols(shares15[1], .) %>% mutate(year=2025)

shares35 <- read_excel("/home/alec/Projects/Brookings/millenials/build/data/Millennial Report_Figures_Maps_Tables nw.xlsx", 
                       sheet="Figures", range="K194:M197", col_names=FALSE) %>% bind_cols(shares15[1], .) %>% mutate(year=2035)

nm <- c("race", "pre_millennials", "millennials", "post_millennials", "year")

names(shares15) <- nm
names(shares25) <- nm
names(shares35) <- nm

bound <- bind_rows(shares15, shares25, shares35) %>% gather(generation, within_gen_share, pre_millennials:post_millennials)

total_pop <- tibble(year=c(2015, 2015, 2015, 2025, 2025, 2025, 2035, 2035, 2035),
                    generation=c("pre_millennials", "millennials", "post_millennials",
                                 "pre_millennials", "millennials", "post_millennials",
                                 "pre_millennials", "millennials", "post_millennials"),
                    pop = c(167290508, 75357094, 73645111, 148154517, 79567572, 119612823, 118844451, 81096022, 170397664))


bound2 <- inner_join(bound, total_pop, by=c("generation", "year")) %>% mutate(gen_pop = (within_gen_share/100)*pop)

bound2$gen <- factor(bound2$generation, levels=c("pre_millennials", "millennials", "post_millennials"), labels=c("Pre-millennial", "Millennial", "Post-millennial"))

bound3 <- bound2 %>% group_by(year) %>% mutate(share = gen_pop/sum(gen_pop))

max(abs(100*bound2$gen_pop/bound2$pop - bound2$within_gen_share))
sum(bound2$within_gen_share)



####scrap

#gg + geom_col(aes(x=year, y=within_gen_share, fill=race)) + facet_wrap(c("gen"), nrow=1)

#gg + geom_col(aes(x=gen, y=gen_pop, fill=race)) +  
#     geom_text(aes(x=gen, y=gen_pop, label=round(within_gen_share,1), group=race), position="stack", vjust="top") +
#     facet_wrap(c("year"), nrow=1)



#gg + geom_line(aes(x=year, y=gen_pop, colour=race)) + facet_wrap("gen", nrow=1)


#gg + geom_col(aes(x=year, y=gen_pop, fill=race))
