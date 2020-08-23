export interface Content {
  id: number;
  type: "pre" | "p" | "post" | "sectionhead" | "image" | "aside";
  header?: string;
  data: string[];
}

interface Blog {
  id: number;
  title: string;
  date: string;
  tags: string[];
  author: string;
  relatedBlogs: number[];
  content: Content[];
}

export const travelBlogList: Blog[] = [
  {
    id: 1,
    title: "The Dortmund Experience",

    date: "Oct 16 2014",
    tags: ["bundesliga", "germany", "football", "dortmund"],
    author: "Sandeep Madavu",
    relatedBlogs: [2, 3],
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "This is an account of my trip along with my friend to Dortmund for a Bundesliga game. A football crazy city and an atmosphere matched by none thanks to the yellow wall. The pictures appear with no relation to the text around them. I had initially published this on my company blog. Moving here for a wider audience."
        ]
      },
      {
        id: 2,
        type: "p",
        data: [
          "Let's get started with a couple of pictures of the maginificient yellow wall 🙌🏻 -"
        ]
      },
      { id: 3, type: "image", data: ["dortmund/dortmund-1.jpeg"] },
      { id: 4, type: "image", data: ["dortmund/dortmund-2.jpeg"] },
      {
        id: 5,
        type: "p",
        data: [
          `I have lived in Finland for a year now and had always wanted to watch the "Beautiful game" in a stadium. Well, not just for the sake of it - I have been following European Football for over a decade now and when you get deputed to the Eurozone (given its Schengen advantages) one would think there is no need of a second invitation. But it did not turn out that way exactly. Finland is a fantastic country and the Fins are great at Ice Hockey but their greatest achievement in World Football has been a 1-1 draw against the then World Champions Spain in WC qualifiers (HJK, the club from Helsinki could’ve qualified to the Champions League this season opening up my chances but APOEL emphatically burst the bubble) and the Veikkausliiga hasn’t really got me interested (although they have an FC Inter here!).`
        ]
      },
      {
        id: 6,
        type: "p",
        data: [
          "So, the Schengen advantage had to be used and the time hadn’t come right. But one fine day, we realized (me and my friend, Jibin) that the time was never going to be right and a move had to be made, quickly. We made a very quick decision: Germany, the Weltmeisters! The next one was not so quick: Bayern or Dortmund? I’m going to be very honest here: I am not a great Bayern fan (in fact, I despise them!) although they are very good. I do like Dortmund a lot – fast, direct, no nonsense (very German), not many stars and amazing, amazing fan support. But that’s not the reason we ruled out Bayern. The reason was very straightforward and very Indian: the ticket prices :-) Tickets were not available for both teams and we had to get them from some online sites, and trust me: even the Dortmund tickets we got were very highly priced than their actual selling price.",
          "Below is a picture of Myself (extreme right), Jibin (the other Indian), Jens (the other Black shirt guy) and his friends outside the stadium"
        ]
      },
      { id: 7, type: "image", data: ["dortmund/dortmund-3.jpeg"] },
      {
        id: 8,
        type: "p",
        data: ["This is me coming out of the BVB Store."]
      },
      { id: 8100, type: "image", data: ["dortmund/dortmund-4.jpeg"] },
      {
        id: 9,
        type: "p",
        data: [
          "A 2.5 hour flight to Frankfurt (the time zone concept makes it 1.5!) and a 3 hour train (or bahn) to Dortmund (I’m not going to get started saying about the train because I can’t really say enough about the train; I’m planning for a blog on the train ;-)) meant that the travel part was complete (reached Dortmund at about 2 am on Saturday, Oct 4th). The next part was to wait till sunrise, and I made some observations during the waiting period and the fact that the night was Friday night for most people didn’t really help. Germans love beer and have it all the time (more than we have water)! It was very difficult to find one without a beer bottle. The night being a Friday night and the Oktoberfest period on going only assisted the beer cause!"
        ]
      },
      {
        id: 10,
        type: "p",
        data: [
          "October 4th was match day in Dortmund: Ballspielverein Borussia 09 e.V. Dortmund v Hamburger Sport-Verein e.V at 3.30 pm CEST. It didn’t take long for the mood to build up. The yellow shirts started showing up very early. Even the Hamburg fans made it quite early and you could find them drinking beer outside the train station. We walked into the BVB store nearby and got the yellow jersey (Reus at the back. The shirt did help later 😬)."
        ]
      },
      { id: 11, type: "image", data: ["dortmund/dortmund-5.jpeg"] },
      { id: 12, type: "image", data: ["dortmund/dortmund-6.jpeg"] },
      { id: 13, type: "image", data: ["dortmund/dortmund-7.jpeg"] },
      { id: 14, type: "image", data: ["dortmund/dortmund-8.jpeg"] },
      {
        id: 15,
        type: "p",
        data: [
          "After some consultation with other Dortmund fans (we found that it was difficult to get help from HSV fans with the yellow jersey on), we decided that the Subway was the best option to get us to our destination: Signal Iduna Park (I have always liked the original name: The Westfalenstadion. Well, obviously because the new name bears the sponsor’s name. The same goes to Allianz Arena, the Emirates (although it wasn’t a renaming) and Ettihad (Maine Road wasn’t much better!). Signal Iduna is a financial company based in Dortmund and Hamburg, coincidentally. So, this fixture might be of special interest for them!). We were trying to get the right ticket from the vending machine and that’s when we were told by a bunch of local fans that if we have a match ticket, the ride is free to the station via the Subway. One of the guys, Jens, realizing that we were quite new to this match thing offered to accompany us to the stadium. Apparently, they were quite excited to know that people from as far as India have come to watch to see their local club and the yellow jersey does really help :-D So, we had made some German friends for the occasion. These guys had amazing beer capacity and one of them looked like Goetze! It did not help him in any way. I’m sure he was a hero about 2 years ago. There was a joke about him that I resist from sharing 😉"
        ]
      },
      {
        id: 16,
        type: "p",
        data: [
          "We boarded the most crowded Subway train in Europe to reach the Signal Iduna Park. The security check was a pretty quick affair and again the volunteers were pretty happy to see some unfamiliar visitors. The stadium took a while to get filled in. There was a very small section away fans which was filled to its capacity very early. The HSV players came out very early while the home players took some time before they were called upon individually. There were a number of songs played and some pitch side interviews (a la IPL) during the build-up shown on the big screen (the one that caught my eye was the Norton anti-virus ad by Weidenfeller and the fellow keepers. No prizes for guessing why 🙃)."
        ]
      },
      { id: 17, type: "image", data: ["dortmund/dortmund-9.jpeg"] },
      { id: 18, type: "image", data: ["dortmund/dortmund-10.jpeg"] },
      { id: 19, type: "image", data: ["dortmund/dortmund-11.jpeg"] },
      {
        id: 20,
        type: "p",
        data: [
          "The famous South Tribune (Sudtribune, also called the Yellow Wall. We were at the West Tribune near the South.) took the longest to fill and once it did, they conquered the atmosphere. Once the game started, the fans just wouldn’t stop chanting and that too with such great sync (the abstract orchestration really captures the imagination) and would start jumping in sync at times. The noises increased once HSV took the lead with Lasogga’s goal. This was definitely not one of those places where the home crowd goes silent after their team concedes. After all this is the team known for their fans. There were a few cries of concern – the aahs and the oos – when Weidenfeller had to make some saves. Otherwise, you could only hear the singing. Once the game was over, the players went to appreciate the South Tribune. For about 10 minutes, the fans went on singing praises for them as the players applauded (while HSV celebrated at the other end with their fans). As I mentioned before, nobody could guess that Dortmund had actually lost. The fan experience made it up for Dortmund’s loss as far as I was concerned."
        ]
      },
      { id: 21, type: "image", data: ["dortmund/dortmund-12.jpeg"] },
      { id: 22, type: "image", data: ["dortmund/dortmund-13.jpeg"] },
      { id: 23, type: "image", data: ["dortmund/dortmund-14.jpeg"] },
      { id: 24, type: "image", data: ["dortmund/dortmund-15.jpeg"] },
      { id: 25, type: "image", data: ["dortmund/dortmund-16.jpeg"] },
      { id: 26, type: "image", data: ["dortmund/dortmund-17.jpeg"] },
      { id: 27, type: "image", data: ["dortmund/dortmund-18.jpeg"] },
      {
        id: 28,
        type: "p",
        data: [
          "The above pictures taken inside the stadium. Sorry, forgot to click during the game but can't really blame myself!"
        ]
      },
      {
        id: 29,
        type: "p",
        data: [
          "Finally, let’s talk about the game. I have to admit that mine was not the best seat in the house and I did not see the game more clearly than anybody watching at home. In addition, I am not very enthusiastic about the Bundesliga although have been following Dortmund from a distance. But, the stadium experience makes a lot of difference. I would say that it was a very average game from the BVB perspective. Immobile did not start which was a disappointment. Aubameyang (who has been good recently despite BVB’s poor form), Ramos, Sven Bender and especially Erik Durm were disappointing. I thought that Piszczek should’ve started and have no idea as to why technically poor Durm is being preferred by Klopp. Kagawa was fantastic and I am actually very happy about him finding himself again. The Japanese playmaker hardly put a foot wrong. HSV created a number of chances with the Dortmund defence lead by Hummels really struggling (Hummels himself gave the ball away when they conceded. He doesn’t seem like such a big miss for United now!). Although BVB kept most of the ball, HSV had a number of clear cut chances until Lasogga found the empty net. I really don’t know who assisted, but it was good work from the away team. After that, Weidenfeller made a couple of saves to keep the home team in it. Dortmund couldn’t really get their game going and half time whistle was a relief with more face palm moments than hands in the air moments. Jojic came on for Bender in the second half and then Durm was finally removed in the last half an hour. With Immobile also coming on towards the end, the game was set for a grand stand finish! The last 20 minutes of the game was played at scintillating pace and nobody could take their eyes off. Immobile got the best chance of the game after some neat give and go just after coming on, and could’ve been an instant hero. But, the Italian put it wide of the post. For the amount of possession that Dortmund have, they did not create enough chances. On the other hand, they were exposed horribly at the back by HSV who must have scored at least two more. The game did finish 0-1 in favour of the travelling team much to the disappointment of the home contingent but not that they complained. The only complaint on the part of HSV was their time wasting tactics which the referee took very long to identify. The absence of Reus and Mkhitaryan seems to be hurting Dortmund a lot. The return of the duo along with Gundogan and Sahin should improve the situation. There is a lot of scope for improvement in the defence as well. Even United defence is doing better. I would love to see BVB do well."
        ]
      },
      {
        id: 30,
        type: "p",
        data: ["Mandatory solo pictures of my friend and I follow 📸"]
      },
      { id: 31, type: "image", data: ["dortmund/dortmund-19.jpg"] },
      { id: 32, type: "image", data: ["dortmund/dortmund-20.jpg"] },
      {
        id: 33,
        type: "p",
        data: [
          "The home fans were disappointed but that did not seem to affect their plans – drinking more beer (there is no plan B). You could see the HSV fans bragging (they did earn the rights) about it during the rest of the evening. It was not an ideal finish (I would’ve loved to see the stadium erupt had BVB scored) but the satisfaction of witnessing the greatest fan experience in football was mine! I wouldn’t miss another chance to visit the place and I hope that Dortmund don’t miss the target should that happen 😄"
        ]
      },
      {
        id: 34,
        type: "post",
        data: [
          "It might sound funny, but we were allowed cameras inside the stadium with permissions to take pictures only for personal use. So, please do not use for any commercial purposes. I told you, it might sound funny 😜"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Weekend in the City of Treble winners!",

    date: "Jun 17 2015",
    tags: ["laliga", "spain", "football", "barcelona"],
    author: "Sandeep Madavu",
    relatedBlogs: [1, 3],
    content: [
      {
        id: 1100,
        type: "pre",
        data: [
          "This is an account of my trip to the final la liga game of the season in 2015 to sunny Barcelona. This was originally published by me to my company blog. This was also the year when Barca won the treble."
        ]
      },
      {
        id: 1,
        type: "p",
        data: [
          "Hola amigos! Here's another match day blog from me. This is a write-up on my recent trip to one of the Meccas of Club football- the Camp Nou. Although I'm not a Barca fan, I was there for the game between Champions FCB and relegation battling Deportivo La Coruna on the 23rd of May 2015. I have tried to provide some travel tips if someone is interested. Although the game itself did not spice-up until Deportivo suddenly realised that they will be relegated unless they get a point, the game will be remembered as Xavi's last game at the Camp Nou (although I realised only once the banners came out)!"
        ]
      },
      { id: 2, type: "image", data: ["barcelona/barcelona-1.jpg"] },
      {
        id: 3,
        type: "p",
        data: [
          "If you were to visit a stadium for the last game of the season, where would you go? I would go to Old Trafford! But I didn't. I went to Barcelona. I still do not know why I decided to go there! By the time I bought the game tickets, Barcelona were already crowned champions after their exploits at the Caulderon and I probably assumed that the mood in Madrid would be gloomy. While that was still true, CR7 and company put 7 past Getafe in a 10 goal thriller on the final day in Madrid! How disappointing! Not at all. It's early summer and Barcelona has a beach - what else do you need! Although I got there for footballing reasons, this amazing city definitely captured my imaginations. I have been to quite a few cities and this was probably the best experience. I have to accept that I'm so glad that I actually chose Barcelona over Madrid. In any case neither MSN nor BBC were going to appear bigger than Antmen!"
        ]
      },
      {
        id: 4,
        type: "p",
        data: [
          `An early morning flight from chilly Helsinki (It's still around 20 degrees here and can go down to 12 degrees. Although the local people are already out in beachwear!) to sunny Barcelona (man, wasn't it hot!) with half a day to go for the game, I arrived in Terminal 1 with one hour of my life recovered due to time zone changes (of course I would lose it the next night). A "guapa chica" sold me a SIM card as I was about to leave the "aeroporto" but there were no other surprises (The SIM card was useful. Seriously!). The following lines may feel like a TripAdvisor review but can't help - The public transport is so good in Barcelona and the airport bus provides the perfect start. It might sound funny - although I live in Helsinki, I used taxi to travel to and from the Helsinki airport while I entirely used public transport in Barcelona! To get to the City centre (Placa de Catalunya), you need to board the A1 bus if leaving from Terminal 1 and T2 if leaving Terminal 2. The buses leave every 5 minutes during the day time and there is no need to hurry (unless of course you are a lazy person and have messed up things). It's the same for the return. It's also pretty cheap, I think! This one's definitely giving nightmares to the Taxi guys in the Catalan capital. The Metro connects to most of the tourist spots. Unlike Finland, the sign boards in public transport like Metros and Metro stations are also in English along with Catalan and Spanish!`
        ]
      },
      {
        id: 5,
        type: "p",
        data: [
          `First on my agenda was to visit a bicycle tour shop nearby the Diagonal metro station (there is also a Paral-lel station. Not sure what happened there). I was going for a multinational (if we can call it so) bike trip through the streets of Barcelona on some of the coolest beach bikes with a cool and informative Dutch guide along with a Colombian guy (He wanted to get to the game as well and was there at the Caulderon for matchday 37. No, I did not complain about Falcao!), two German ladies, and a mother and daughter duo from some other country. I had 90 minutes to get there. Although the person at service desk insisted that I take a taxi, I conveniently ignored the advice and took an L3 metro from Catalunya station. I was proved right! More info coming up - there is something called the "Hola BCN" Card. You can buy cards valid for 2 days, 3 days, etc. This can be used in all inter-city transport vehicles like buses and metros. This doesn't apply to the airport bus. The bike tour turned out to be a very memorable experience since it involved people from diverse culture. Our guide showed us most of the popular places in the city and she also had some stories (Most of them involving Dragons and a guy called Jordi. Although the guide was blonde, she did not resemble Daenerys 😌) to share. The trip covered the Barceloneta beach and a refreshment session involving "Sangria", a Catalan drink! I totally recommend this kind of trip if you're going "soltero". The pictures from the city itself are at the end. Below are some pictures I took outside the stadium entrance.`
        ]
      },
      { id: 6, type: "image", data: ["barcelona/barcelona-2.jpg"] },
      { id: 7, type: "image", data: ["barcelona/barcelona-3.jpg"] },
      { id: 8, type: "image", data: ["barcelona/barcelona-4.jpg"] },
      { id: 9, type: "image", data: ["barcelona/barcelona-5.jpg"] },
      { id: 10, type: "image", data: ["barcelona/barcelona-6.jpg"] },
      { id: 11, type: "image", data: ["barcelona/barcelona-7.jpg"] },
      {
        id: 12,
        type: "p",
        data: [
          `Well it was a dream start! The day got better with some great "Tapas" (A kind of local food. I wasn't looking for dal-chawal!) at a nearby restaurant in Gracia (Suggested by the bike people. Don't I love them!). As my Spanish is "mal" to say the least, I was lucky enough to find a Pakistani waiter at the restaurant. With the trip to Camp Nou still to come, this was already a fantastic day. I was on my way to the house I booked for the night which was at a walkable distance from Camp Nou! Something that I took note during the trip so far was the fact that the people seem to be quite open about their political stance. Not surprisingly for many of you, they want to separate from Spain. You can see the yellow and red striped flags flying everywhere with the one outside El Born being prominent. As our guide mentioned, the ones with a star are the ones who want a separate nation and you could hardly find a house without one such flag! It seems there was a voting within Catalunya in which a clear majority wanted separate country. But this was nominal as the government in Madrid did not recognise this.`
        ]
      },
      {
        id: 13,
        type: "p",
        data: [
          "I reached Camp Nou at 1730 CEST, an hour ahead of the kick-off. It was a pretty crowded place with duplicate shirts being sold outside. The complex is quite intimidating from the outside, but definitely more so from the inside. A capacity of nearly a 100 thousand - it was big, very big. There were large, coloured cards on the seats. Mine was blue. No prizes for guessing - that massive 'CAMPIONS!' sign was created using those cards. I was one of the contributors, although not for the aplhabets! Below are the images of that one. The instructions were pretty clear although not religiously followed."
        ]
      },
      { id: 14, type: "image", data: ["barcelona/barcelona-8.jpg"] },
      { id: 15, type: "image", data: ["barcelona/barcelona-9.jpg"] },
      {
        id: 16,
        type: "p",
        data: [
          `It was pretty sunny and I actually struggled to sit there with the Sun positioned directly overhead. I have to say that it was very disturbing. Calling the atmosphere electric would be an overstatement! Even during the game, there were no songs sung (contrary to what happened in Westfalenstadion) except for some drums and a chant of "Barca". Once in a while they took the name of "Xavi" and "Luis Enrique". Since Barca were already Champions, the fans seemed very relaxed. A handful (I don't think there were more!) of Deportivo fans were trying to make some noise of their own. If Eibar win and Deportivo lose, those fans would be in tears at the end of the night! A few tourists were getting their pictures taken. A local guy who looked like Pedro took mine with "Numero ocho" on my back ;-) The Barca anthem was sung and the "CAMPIONS!" design materialized. The hashtag #6RACIESXAVI was popular in Twitter a few weeks ago. This was visible on the sidelines of the pitch. "6RACIES" is actially "Gracies" (of course, he's number 6), which is "Thanks" in Catalan! Once the big "Xavi" banner came down, we were good to go. I guess most people want to see Messi score and the guy rarely disappoints (the CL final being one such blue moon day). Within 5 minutes, I had seen a Messi goal at Camp Nou. An early goal from Messi meant that the hosts were in control and barring a miracle from Cordoba, Deportivo were staring down the barrel! Apart from the goal, Messi wasn't involved too much. I thought that Rafinha and Neymar were highly involved in that first half while Mathieu was annoying to say the least. I still can't believe that the French guy scored against City! The game got boring after the first goal and the score remained the same at the interval. Some pictures below.`
        ]
      },
      { id: 17, type: "image", data: ["barcelona/barcelona-10.jpg"] },
      { id: 18, type: "image", data: ["barcelona/barcelona-11.jpg"] },
      { id: 19, type: "image", data: ["barcelona/barcelona-12.jpg"] },
      { id: 20, type: "image", data: ["barcelona/barcelona-13.jpg"] },
      { id: 21, type: "image", data: ["barcelona/barcelona-14.jpg"] },
      { id: 22, type: "image", data: ["barcelona/barcelona-15.jpg"] },
      {
        id: 23,
        type: "p",
        data: [
          `The half time score in Eibar was 3-0 and the miracle was not coming for the team from A Coruna. It looked like Deportivo realized that they need to do it themselves, came out and conceded within 15 minutes to the same man! My second Messi goal!! To be fair, Neymar should've scored himself as he was in on goal. It was almost as if the Barca fans in the stadium forced Neymar to put it on the plate for Messi to score. They don't care about any one else but Messi (after all, he needs to stay in touch with Ronaldo)! The Pedro lookalike near me shouted "Messi Messi" as I was expecting Neymar to fire and it felt like another 99900 in the stadium did the same!`
        ]
      },
      {
        id: 24,
        type: "p",
        data: [
          `Alright then! An hour gone, 2-0 at the Camp Nou - looks like the perfect home farewell for the midfield maestro, right? Wrong! Goal of the game by Lucas and then an unconvincing finish from Diogo Salomao meant that Senor Hernandez would be part of another farewell gone wrong. Well, this has been a season of horrible farewells. While Liverpool will definitely take home the Gold medal, Dortmund were not going to be left behind - thanks to De Bruyne and company! At least, Xavi won the treble and was actually on the field when another midfield maestro was in tears, two weeks later in Berlin. Speaking of tears, Xavi actually shed tears during his farewell speech, none of the words of which I could understand! After watching Messi score, I had now witnessed Xavi's cry! There were more reasons to cry as "numero ocho" Iniesta came on for the man of the moment, Xavi. With 4 minutes to go, I had seen my favourite Barca player play at Camp Nou. But even he couldn't change the destiny of this game. While Deportivo fans went crazy on my left, I seemed to be the only one applauding the Deportivo goal in the Barcelona gallery. I was wise enough to not do that for the second goal! But, I was definitely the most content person in that gallery! So, I had watched two games in different stadiums and no home team had won! But this one was definitely pleasing. While the game had to be remembered as Xavi's last game, I would remember it by the happiness of Deportivo's players and fans (I don't think a lot of Barca fans realised what had happened there having been crowned champions) having survived relegation.`
        ]
      },
      { id: 25, type: "image", data: ["barcelona/barcelona-16.jpeg"] },
      { id: 26, type: "image", data: ["barcelona/barcelona-17.jpg"] },
      { id: 27, type: "image", data: ["barcelona/barcelona-18.jpg"] },
      { id: 28, type: "image", data: ["barcelona/barcelona-19.jpg"] },
      { id: 29, type: "image", data: ["barcelona/barcelona-20.jpg"] },
      {
        id: 30,
        type: "p",
        data: [
          "It was party time in the Camp Nou! A lot of crackers burnt, victory chants sung, victory laps run, group photos taken, what not! A tearful speech by Xavi was followed by a rather unexpectedly joyful one by Iniesta who declared that winning the league is no big deal, and Copa Del Rey as well as the Champions League had to be won. Those words seemed to be a writing on the wall at the time and two weeks later were a reality to no one's surprise. Luis Enrique made a speech of his own (I seriously have no idea about that one). Although I'm not very fond of Barcelona, I have admired the way Luis Enrique has made them play this season. Their game has been much more direct and the defensive aspect seems to be much more improved. Messi has produced some unbelieveably great moments this season and for the first time I had to accept that he is probably the best to have played the beautiful game! Some less perfect players like Rakitic and Suarez (none of whom featured in this game) have made the team more complete! The club seemed to be heading for a crisis after the 3-1 loss at the Bernabeu back in October. But, to go and win the treble from there has to be called remarkable. To say that, being there on the last day of the league season, during a history making season by the best team in Europe was a privilege, would be an understatement! But yeah, I would still prefer United against Bristol Rovers at Old Trafford 😉"
        ]
      },
      {
        id: 31,
        type: "p",
        data: ["As promised, some pictures from the City tour!"]
      },
      { id: 32, type: "image", data: ["barcelona/barcelona-21.jpg"] },

      { id: 33, type: "image", data: ["barcelona/barcelona-22.jpg"] },

      { id: 34, type: "image", data: ["barcelona/barcelona-23.jpg"] },

      { id: 35, type: "image", data: ["barcelona/barcelona-24.jpg"] },

      { id: 36, type: "image", data: ["barcelona/barcelona-25.jpg"] },
      {
        id: 37,
        type: "p",
        data: ["Barceloneta beach below.          "]
      },
      { id: 38, type: "image", data: ["barcelona/barcelona-26.jpg"] },
      {
        id: 39,
        type: "p",
        data: ["Outside El Born"]
      },
      { id: 40, type: "image", data: ["barcelona/barcelona-27.jpg"] },
      {
        id: 41,
        type: "p",
        data: [
          "This is another marvellous creation by Gaudi. A lot of dragons here.          "
        ]
      },
      { id: 42, type: "image", data: ["barcelona/barcelona-28.jpg"] },
      {
        id: 43,
        type: "p",
        data: ["Near Picasso Museo"]
      },
      { id: 44, type: "image", data: ["barcelona/barcelona-29.jpg"] },
      {
        id: 45,
        type: "p",
        data: [
          "The Sagrada Familia Church: A very intimidating church. Big, very big! Makes searching lot easier."
        ]
      },
      { id: 46, type: "image", data: ["barcelona/barcelona-30.jpg"] },
      {
        id: 47,
        type: "post",
        data: [
          "This conversation took place between one among a bunch of drunken guys and me at Barceloneta beach!",
          "Him: Hola Amigo!",
          "Me: (After a pause) Hola!",
          "Him: Barcelona o Madrid?",
          "Me: (Thinking why this question had to be asked, and wanting to convey that I watched the game between Barca and Deportivo but only managing to say) Deportivo!!",
          "They burst into laughter!"
        ]
      }
    ]
  },
  {
    id: 3,
    title:
      "A beautiful game made ugly in South of France: Game day in Marseille",

    date: "Jun 13 2016",
    tags: ["euro2016", "france", "football", "marseille"],
    author: "Sandeep Madavu",
    relatedBlogs: [1, 2],
    content: [
      {
        id: 1,
        type: "pre",
        data: [
          "I watched the Euro 2016 Russia v England game in Marseille which had a bit of a horror ending. Here are my notes."
        ]
      },
      {
        id: 2,
        type: "p",
        data: [
          "I was in the beautiful city of Marseille in South of France this weekend to watch England play Russia at the Vélodrome , and returned unscathed! While England put up a classy performance and Russia not so much, the show was stolen by the petulant behavior of some from both sets of fans along with some local youth which literally turned the streets of Marseille into a battleground as violence broke out. A reminder as to how dangerous Football hooliganism can be. This blog is just to state what I saw on a shameful night for Football."
        ]
      },
      { id: 3, type: "image", data: ["marseille/marseille-1.jpeg"] },
      {
        id: 4,
        type: "p",
        data: [
          `Eric Dier's goal could be one of the most under-appreciated goals ever. A sublime free-kick when all of England seemed to have forgotten how to finish! It's not often that we say - England played very well. But when it did happen, all the spotlight was taken away by those "fans" whose sole purpose of existence (but de la vie!) seemed to be to cause chaos. To be honest, I did not see the street fight, the chasing, the chair-throwing, the stone-pelting and the tear-gas stuff - all that happened prior to the game. That was much earlier to my arrival. There are all kind of videos showing these things actually happening. I made sure that I stayed very close to the Vélodrome and got out only before the game. But what I did see happened on the opposite end of the stadium to where I was sitting and it wasn't pretty!`
        ]
      },
      { id: 5, type: "image", data: ["marseille/marseille-2.jpg"] },
      {
        id: 6,
        type: "p",
        data: [
          "My ticket only said that I had a seat in the Vélodrome. It could've been along the Russians or the English (or some Mexicans who made their way clearly to the wrong tournament with the centenario thing ongoing :-D). But fortunately (explanation will follow!), I was with the English fans behind one of the goals. The Russian fans were few in number and a major chunk of them was seated behind the opposite goal. This won't have been an issue, except for the fact that there were a few English fans on that side of the stadium. You could smell danger from the set-up especially once Dier put England in front and some of the Russian fans started lighting flares (wonder how those got in, may be not!). Apparently, the French police couldn't smell!"
        ]
      },
      { id: 7, type: "image", data: ["marseille/marseille-3.jpg"] },
      {
        id: 8,
        type: "p",
        data: [
          "How good is the security in France? In my opinion, security in some Indian airports is stricter. At least, I did not find any enforcement made for the Euros. In Paris, at the airport entrance, there is no automated scanning. Any scanning begins only after check in - standard stuff all year round, right? The stadium had no electronic security check whatsoever! At both the airport entrance and the stadium entrance, there is a manual check where a guy (or a lady depending on you) runs his (or her) hands to check if you have anything in your pockets. The thing is - even if you have something, they seem to be fine with it! That's how the flares and fireworks got in and there is nothing to suggest that something else won't get in! In the airport entrance, there's a man (no lady here) checking bags. You just open and show some clothes at the top and he lets you go. It probably won't matter what's underneath. In addition, there was no check when I got into my train to Marseilles and not even a ticket check while returning. Well you could argue that there is a huge incoming population. But, this is only for a month and definitely things could be improved. Also clearly, the Marseille police were ill-prepared when the fight broke-out in the city especially given the reputation of the English fans and not least, the Russian ultras."
        ]
      },
      {
        id: 9,
        type: "p",
        data: [
          `It was a sad end to the game if you are an English supporter going by the result. But, if you think about what happened in the aftermath, you would probably be happy that the game ended level or else the Russian ultras could've gone harder on their English "rivals". Probably not! Just as the final whistle went off, a group of Russian hooligans just ran into the section where English fans - including women and children - were seated and started hitting, grabbing shirts, punching with gloves, what not! So, what do you do when a bunch of brutal men attack? Stand-up and take a selfie? No - you flee for your life. And flee they did climbing the "protective" fences as the Police watched. The only attempt that the authorities seemed to make to contain this before it developed was to request the Russian fans to be seated until the rest of the stadium cleared. Did they really think that was going to happen? Once I returned to my "bunker", I could hear the ambulances running around. Well, it really does scare you.`
        ]
      },
      {
        id: 10,
        type: "p",
        data: [
          "The game was mostly one-sided with England creating a lot of chances only to finish poorly. Rooney played a wonderful game. It was great to see the man whom you admire a lot running the show with long-range passing and show some fantastic awareness. The commitment of the man is such that he can play two games at a stretch! Why Hodgson took him off, I will never know! But Rooney too was guilty of poor finishing along with Lallana and Kane while Sterling was wasteful of possession in good areas. After the hour mark, I was looking for Vardy and / or Sturridge to get involved but the game was graced only by Wilshere and Milner as England turned defensive. The inability to actually grab that elusive second goal cost the game for England. Clearly, Russia were not up for it. But they did get the equalizer and that's all that mattered."
        ]
      },
      {
        id: 11,
        type: "p",
        data: [
          "The atmosphere was fantastic with incessant chanting and singing as alcohol flowed. Some pictures from the game follow."
        ]
      },
      { id: 12, type: "image", data: ["marseille/marseille-4.jpg"] },
      { id: 13, type: "image", data: ["marseille/marseille-5.jpeg"] },
      { id: 14, type: "image", data: ["marseille/marseille-6.jpg"] },
      { id: 15, type: "image", data: ["marseille/marseille-7.jpg"] },
      { id: 16, type: "image", data: ["marseille/marseille-8.jpg"] },
      { id: 17, type: "image", data: ["marseille/marseille-9.jpg"] },
      { id: 18, type: "image", data: ["marseille/marseille-10.jpg"] },
      { id: 19, type: "image", data: ["marseille/marseille-11.jpg"] },
      {
        id: 20,
        type: "p",
        data: [
          `Well there is this extreme hooliganism and there are others who are just naughty. But it all depends on how far they go. I took the Ukrainian Airlines flight from Kiev to Paris. It was full of yellow shirts coincidentally with both Swedish and Ukrainian fans blessing us with some raucous chanting which half of the plane did not understand. I haven't traveled in a bus which was that noisy and I have traveled in a lot of noisy buses! The air-hostesses just had no control and they seemed as they were being indifferent after one stage. At one point, some of the "normal people" became edgy. This happened at such a stage -`
        ]
      },
      {
        id: 21,
        type: "post",
        data: [
          `Swedish fans: "Ibrahiiiiimovic... Ibrahiiiiimovic ......"`,
          "A young lady who had enough: *** Along with Swearing words *** Shut up! Shut up! What do you think this is?",
          `Swedish fans: "Ibrahiiiiimovic... Ibrahiiiiimovic ...... Ibrahiiiiimovic... Ibrahiiiiimovic ......"`,
          "The lady goes at it again!",
          `Swedish fans: "Ibrahiiiiimovic... Ibrahiiiiimovic ...... Ibrahiiiiimovic... Ibrahiiiiimovic ...... Ibrahiiiiimovic... Ibrahiiiiimovic ......"`,
          "The lady gave up. Zlatan would be proud!"
        ]
      }
    ]
  }
];
