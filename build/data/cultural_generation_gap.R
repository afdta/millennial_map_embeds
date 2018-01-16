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

#within-generatin shares, faceted by year
ggplot(bound2 %>% filter(year!=2025), aes(group=race, x=gen, y=within_gen_share)) + geom_col(aes(fill=race)) +  
  geom_text(aes(label=paste0(round(within_gen_share,1),"%"), vjust=1), position="stack", colour="#444444") +
  facet_wrap(c("year"), ncol=1) + scale_fill_manual(values=c("#70ad47", "#ffc000", "#2fc4f2", "#b2b2b2")) +
  labs(x="Generation", y="Share of generation") + coord_flip()

#within-generation shares, faceted by generation
ggplot(bound2 %>% filter(year!=2025), aes(group=race, x=year, y=within_gen_share)) + geom_col(aes(fill=race)) +  
  geom_text(aes(label=paste0(round(within_gen_share,1),"%"), vjust=1), position="stack", colour="#444444") +
  facet_wrap(c("gen"), nrow=1) + scale_fill_manual(values=c("#70ad47", "#ffc000", "#2fc4f2", "#b2b2b2")) +
  labs(x="Generation", y="Share of generation")


#population size, faceted by generataion
ggplot(bound2 %>% filter(year!=2025), aes(group=race, x=year, y=gen_pop)) + geom_col(aes(fill=race)) +  
  geom_text(aes(label=paste0(round(within_gen_share,1),"%"), vjust=1), position="stack", colour="#444444") +
  facet_wrap(c("gen"), ncol=1) + scale_fill_manual(values=c("#70ad47", "#ffc000", "#2fc4f2", "#b2b2b2")) +
  labs(x="Year", y="Share of total") + coord_flip() + scale_x_discrete(breaks=c(2035, 2015))

#population size, faceted by year
ggplot(bound2 %>% filter(year!=2025), aes(group=race, x=gen, y=gen_pop)) + geom_col(aes(fill=race)) +  
  geom_text(aes(label=paste0(round(within_gen_share,1),"%"), vjust=1), position="stack", colour="#444444") +
  facet_wrap(c("year"), ncol=1) + scale_fill_manual(values=c("#70ad47", "#ffc000", "#2fc4f2", "#b2b2b2")) +
  labs(x="Generation", y="Share of total") + coord_flip() + scale_x_discrete(breaks=c(2035, 2015))


bound2$grp <- interaction(bound2$gen, bound2$race)

ggplot(bound2, aes(group=grp, x=year, y=gen_pop, fill=grp)) + geom_area(position="stack") + 
  scale_fill_manual(values=c("#70ad47", "#ffc000", "#2fc4f2", "#b2b2b2")) + 
  scale_x_continuous(breaks=c(2015,2025, 2035)) + 
labs(x="Year", y="Share of total population")

ggplot(bound3 %>% filter(year!=2025) %>% group_by(year, race) %>%summarise(share=sum(share)), aes(group=race, x=year, y=share)) + 
  geom_col(aes(fill=race)) +  
  geom_text(aes(label=paste0(round(share*100,1),"%"), vjust=1), position="stack", colour="#444444") +
  scale_fill_manual(values=c("#70ad47", "#ffc000", "#2fc4f2", "#b2b2b2")) +
  


####scrap

#gg + geom_col(aes(x=year, y=within_gen_share, fill=race)) + facet_wrap(c("gen"), nrow=1)

#gg + geom_col(aes(x=gen, y=gen_pop, fill=race)) +  
#     geom_text(aes(x=gen, y=gen_pop, label=round(within_gen_share,1), group=race), position="stack", vjust="top") +
#     facet_wrap(c("year"), nrow=1)



#gg + geom_line(aes(x=year, y=gen_pop, colour=race)) + facet_wrap("gen", nrow=1)


#gg + geom_col(aes(x=year, y=gen_pop, fill=race))
