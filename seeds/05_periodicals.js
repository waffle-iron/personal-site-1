'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('periodicals').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('periodicals').insert({
          id: 1,
          name: 'Conjunctions',
          issue: 'Sleights of Hand: The Deception Issue (Conjunctions Book 65)',
          editor: 'Bradford Morrow',
          editor_url: 'https://images.gr-assets.com/authors/1297526247p8/25383.jpg',
          edition: 'Kindle Edition',
          publication_date: '2016-02-23 0:00:01 UTC',
          pages: 409,
          img_url: 'https://images.gr-assets.com/books/1469914184l/31298794.jpg',
          description: "Children deceive, as do grownups, and many are the moments when all of us even deceive ourselves. People of every age and stripe, whether rarely or often, dissimulate, bluff, and beguile. The writer who fabricates and populates worlds is a deceiver, as is the artist whose triumph is to trick the eye, to alter perception. The honest magician's livelihood is based on deception; so is the dishonest thief's. And consider the great Russian poet Marina Tsvetaeva who wrote, \"A deception that elevates us is dearer than a legion of low truths,\" thus complicating the subject entirely. This special issue of Conjunctions gathers a wide spectrum of essays, fiction, and poetry on the classic subject of deception, exploring in original and thought-provoking ways a world in which truth is a most fragile, elaborate, and mercurial thing. Contributors include Edie Meidav, Terese Svoboda, Yannick Murphy, Paul Hoover, Bim Ramke, Eleni Sikelianos, Magdalena Zyzak, and many others.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 2,
          name: 'Asimov\'s Science Fiction',
          issue: 'October/November 2016 (Asimov\'s Science Fiction #489-490)',
          editor: 'Sheila Williams',
          editor_url: 'https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png',
          edition: 'Kindle Edition',
          publication_date: '2016-09-23 0:00:01 UTC',
          pages: 196,
          img_url: 'https://images.gr-assets.com/books/1474637247l/32186440.jpg',
          description: "Novella\n \"The Forgotten Taste of Honey\" by Alexander Jablokov\n \"Choose Poison, Choose Life\" by Michael Blumlein\n Novelettes\n \"Eating Science with Ghosts\" by Octavia Cade\n \"Wretched the Romantic\" by Michael Libling\n \"The Leaning Lincoln\" by Will Ludwigsen\n \"Project Entropy\" by Dominca Phetteplace\n Short Stories\n \"The People in the Building\" by Sandra McDonald\n \"Water Scorpions\" by Rich Larson\n \"Lucite\" by Susan Palwick\n \"When Grandfather Returns\" by S. N. Dyer\n Asimov's Volume 40, No. 10&11 (#489&490) October-November 2016\n Sheila Williams, editor\n Cover art by Karla Oritz",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 3,
          name: 'One Story',
          issue: 'Issue #222 - "The Quality of Your Life" by Min Jin Lee',
          editor: 'Hannah Tinti',
          editor_url: 'http://cwp.as.nyu.edu/props/IO/35476/42/hannahtinti.jpg',
          edition: 'Kindle Edition',
          publication_date: '2016-11-23 0:00:01 UTC',
          pages: 36,
          img_url: 'https://www.one-story.com/blog/wp-content/uploads/2016/11/222_cover.png',
          description: "When we’re young, we tend to be idealistic. Everything is new and exciting—especially when it comes to love. A heart that has never been broken before is easier to give away. We do it without knowing the danger. We offer it with both hands. This kind of blind, joyous affection is beautifully captured in our new issue, Min Jin Lee’s \“The Quality of Your Life.\” Set in Korea in 1932, the story follows Sunja, a girl on the cusp of womanhood. Her days are filled with hard work and shopping at the daily market for the boarding house run by her mother. And then, in an instant, everything changes. Sunja crosses paths with an older man named Hansu, who travels for business between Korea and Japan. Soon the blossoming relationship between these two characters becomes as complicated and fraught as the relationship between those two nations. Sunja struggles to maintain her identity, just as her fellow Koreans work against the historical ties that bind them to Japan. This theme continues in Min Jin Lee’s forthcoming novel, Pachinko. Find out more in our Q&A, and then continue on Sunja’s epic journey, where she never gives up fighting for the people she loves.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 4,
          name: 'Asimov\'s Science Fiction',
          issue: 'December 2016 (Asimov\'s Science Fiction #491)',
          editor: 'Sheila Williams',
          editor_url: 'https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png',
          edition: 'Kindle Edition',
          publication_date: '2016-11-09 0:00:01 UTC',
          pages: 115,
          img_url: 'https://images.gr-assets.com/books/1480011299l/33121057.jpg',
          description: "Novella\n \"Where There Is Nothing, There Is God\" by David Erik Nelson\n Novelettes\n \"They Have All One Breath\" by Karl Bunker\n \"Empty Shoes by the Lake\" by Gay Partington Terry\n \"HigherWorks\" by Gregory Norman Bossert\n Short Stories\n \"How the Damned Live On\" by James Sallis\n \"The Cold Side of the Island\" by Kali Wallace\n Poetry\n \"Million-Year Elegies: Archaeopteryx\" by Ada Hoffmann\n \"Relativistic Dickinson\" by John Richard Trtek\n Asimov's Volume 40, No. 12 (#491) December 2016\n Sheila Williams, editor\n Cover art by NASA",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 5,
          name: 'One Story',
          issue: 'Issue #223: In the Neighborhood by Jess Rafalko',
          editor: 'Hannah Tinti',
          editor_url: 'http://cwp.as.nyu.edu/props/IO/35476/42/hannahtinti.jpg',
          edition: 'Kindle Edition',
          publication_date: '2016-12-20 0:00:01 UTC',
          pages: 36,
          img_url: 'https://www.one-story.com/blog/wp-content/uploads/2016/12/223_cover-731x1024.png',
          description: "Twenty years ago, I loaded everything I owned into a truck and moved from a quiet place in the woods to the middle of New York City. It took nearly a year before I understood how to navigate the different subway lines, got used to Indian, Ethiopian, and Egyptian food (the three staples in my neighborhood), and learned how to sleep through the sirens outside my window at night. There is a feeling of disorientation that comes with moving to a completely new landscape, especially when it coincides with a great emotional change, as it does for the characters in Jess Rafalko’s marvelous short story, \“In the Neighborhood.\” Angela and Hank are a married couple who’ve moved from the flat-lands of Nebraska to the mountains of Vermont. They’ve unpacked and settled into new jobs, but the path of their journey is still strewn with wreckage. Hank is avoiding his grief and soldiering forward, while Angela has fallen into a well of guilt, anger, and sadness. Then, one day, a bear appears. The animal opens their mailbox, looking for food, and the scratches it leaves begin to tear down the walls that have built up between this husband and wife, who discover that moving to a new state may change the view from your window, but it will never change what’s in your heart. I hope you’ll all enjoy this story as much as our staff here at One Story did. And be sure to read Jess Rafalko’s Q&A with us, where she talks about work, love, loss, and the tornado that inspired this wonderfully moving story.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 6,
          name: 'Asimov\'s Science Fiction',
          issue: 'January/February 2017 (Asimov\'s Science Fiction #492-493)',
          editor: 'Sheila Williams',
          editor_url: 'https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png',
          edition: 'Kindle Edition',
          publication_date: '2017-01-01 0:00:01 UTC',
          pages: 212,
          img_url: 'https://images.gr-assets.com/books/1483662213l/33802402.jpg',
          description: "Novella\n \"The Speed of Belief\" by Robert Reed\n Novelettes\n \"Tagging Bruno\" by Alan M. Steele\n \"Fatherbond\" by Tom Purdom\n \"The Catastrophe of Cities\" by Lisa Goldstein\n \"The Meiosis of Cells and Exile\" by Octavia Cade\n Short Stories\n \"Crimson Birds of Small Miracles\" by Sean Monahan\n \“Still Life With Abyss\" by Jim Grimsley\n \"Winter Timeshare\" by Ray Nayler\n \"Pieces of Ourselves\" by Robert R. Chase\n \"Destination\" by Jack Skillingstead\n \"Starphone\" by Stephen Baxter\n \"Blow, Winds, and Crack your Cheeks\" by John Alfred Taylor\n Non-fiction\n Reflections: \"Two Cheers for Piltdown Man\" by Robert Silverberg\n Volume 41, Nos. 1&2 (#492&493) January/February 2017\n Sheila Williams, editor\n Cover art by Maurizio Manzieri",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 7,
          name: 'One Story',
          issue: 'Issue #224: Optimistic People by Chris Drangle',
          editor: 'Hannah Tinti',
          editor_url: 'http://cwp.as.nyu.edu/props/IO/35476/42/hannahtinti.jpg',
          edition: 'Kindle Edition',
          publication_date: '2017-01-17 0:00:01 UTC',
          pages: 36,
          img_url: 'https://www.one-story.com/blog/wp-content/uploads/2017/01/224_cover.jpg',
          description: "There are many layers to Chris Drangle’s \“Optimistic People,\” including the layer of earth one of the characters is buried under as the story opens. Contributing Editor Will Allison lassoed this twisted, hair-raising work of fiction, so I’m happy to let him make the introductions. Enjoy!-PR\n This month we’re excited to bring you one of the most shocking, suspenseful short stories ever to cross One Story’s submission desk: \“Optimistic People,\” by Chris Drangle. Set in rural Virginia, “Optimistic People” is the tale of two teenagers on their first date. Warren and Soleil have plans to meet up in the woods to watch the sunset. Warren is well meaning but dim; as Soleil puts it, \“There was a thin line between being good and being a moron, and he straddled it.\” Soleil is the new, weird girl in town, her parents having fled Washington D.C. to escape a congressional staff assistant turned stalker.\n The teens’ plans go awry when Soleil runs out of gas en route to the meetup. Meanwhile, Warren stumbles upon two men burying a mysterious something in the woods. Minutes later, we meet friendly, disheveled Tom, whose prayers are answered when Warren unearths the pine box in which Tom has been buried alive.\n I’m guessing you’ve never encountered a character quite like Tom. (If there’s such a thing as your typical buried-alive guy, this guy is definitely not it.) I won’t spoil the plot by revealing more, but you should know that a man being buried alive is not this story’s most chilling plot twist. That comes later, and it unfolds in a fictional slow motion that will have you turning pages with a delicious sense of dread.\n Chris Drangle is still new on the literary scene, having published just a handful of stories, but we look forward to seeing a lot more of his work. You can get to know him in our online Q&A, where Chris discusses techniques of suspense, his fondness for story titles, and the importance of figuring out why the junebug collapses.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 8,
          name: 'Asimov\'s Science Fiction',
          issue: 'March/April 2017 (Asimov\'s Science Fiction #494-495)',
          editor: 'Sheila Williams',
          editor_url: 'https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png',
          edition: 'Kindle Edition',
          publication_date: '2017-02-19 0:00:01 UTC',
          pages: 190,
          img_url: 'https://images.gr-assets.com/books/1487341668l/34327347.jpg',
          description: "Novella\n \“Tao Zero\” by Damien Broderick\n Novelettes\n \"Soulmates.com\" by Will McIntosh\n \"Three Can Keep a Secret\" by Bill Johnson & Gregory Frost\n \"Kitty Hawk\" By Alan Smale\n \"The Wisdom of the Group\" by Ian R. McLeod\n Short Stories\n \"Number Thirty-Nine Skink\” by Suzanne Palmer\n \"The Ones Who Know Where They Are Going\" by Sarah Pinsker\n \“Invasion of the Saucer-Men\" by Dale Bailey\n \"Cupido\" by Rich Larson\n \"A Singular Event in the Fourth Dimension\" by Andrea M. Pawley\n \"After the Atrocity\" by Ian Creasy\n \"Goner\" by Gregory Norman Bossert\n \"We Regret the Error\" by Terry Bisson\n Poetry\n \"Mount Rushmore\" by Marge Simon\n \"Small Certainties\" by Sara Polsky\n \"Almost Certainly a Time Traveler\" by Jarod K. Anderson\n \"Surreal Axioms\" by Bruce Boston\n \"Note from Olympus Mons\" by Robert Frazier\n \"Rock, Paper, Scissors\" by Robert Borski\n Asimov's Science Fiction, March/April 2017, Volume 41, No. 3&4, #494-495\n Sheila Williams, editor\n Cover art by Tomislav Tikulin",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 9,
          name: 'New York Times',
          issue: 'Sunday, March 26, 2017',
          editor: 'Dean Baquet',
          editor_url: 'http://pixel.nymag.com/imgs/daily/intelligencer/2014/05/14/14-dean-baquet.w245.h368.2x.jpg',
          edition: 'Kindle Edition',
          publication_date: '2017-03-29 0:00:01 UTC',
          pages: 200,
          img_url: 'https://i.sixfoot6.org/images/nytimes-weight/nytimes-weight-lede.jpg',
          description: "The New York Times (sometimes abbreviated NYT and The Times) is an American daily newspaper, founded and continuously published in New York City since September 18, 1851, by The New York Times Company. The New York Times has won 119 Pulitzer Prizes, more than any other newspaper",
          created_at: new Date('2017-03-26 14:55:16 UTC'),
          updated_at: new Date('2017-03-26 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 10,
          name: 'One Story',
          issue: 'Issue #225: An Oral History of the Next Battle of the Sexes by Lucas Schaefer',
          editor: 'Hannah Tinti',
          editor_url: 'http://cwp.as.nyu.edu/props/IO/35476/42/hannahtinti.jpg',
          edition: 'Kindle Edition',
          publication_date: '2017-02-21 0:00:01 UTC',
          pages: 36,
          img_url: 'https://www.one-story.com/blog/wp-content/uploads/2017/02/225_cover-copy-214x300.jpg',
          description: "When \“An Oral History of the Next Battle of the Sexes,\” by Lucas Schaefer, showed up at the office and I gave it an initial read, I spent the first few pages having to remind myself that I was reading a work of fiction and not an actual oral history. Once I wrapped my head around that, I became drawn in by one of the biggest casts of characters I’ve ever encountered in a short story—each voice distinctive, each character a building block in the recreation of a historic (fictitious) event: the legendary 1974 battle between Holly Hendrix and Terry Tucker. The story is as compelling as it is funny, as infused with personality as it is charged with spot-on observations about the way we regard gender, power, and ambition. We’re delighted to be ushering it into the world, and we’re even more delighted that this is the first publication by a talent we are most certainly going to be hearing more from in the future: Lucas Schaefer.\n To learn more about why Lucas chose to write a fictional oral history instead of a more traditional short story—and to hear what he has to say about the joys and challenges of that form—check out our online Q&A with the author. We make it standard practice to conclude our Q&As by asking authors to share the best piece of writing advice they’ve ever received. Lucas’s answer is both a charmer and heartbreaker!",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 11,
          name: 'One Story',
          issue: 'Issue #226: Prairie Fire, 1899 by Mike Alberti',
          editor: 'Hannah Tinti',
          editor_url: 'http://cwp.as.nyu.edu/props/IO/35476/42/hannahtinti.jpg',
          edition: 'Kindle Edition',
          publication_date: '2017-03-21 0:00:01 UTC',
          pages: 36,
          img_url: 'https://www.one-story.com/blog/wp-content/uploads/2017/03/226_cover_blog-214x300.jpg',
          description: "When I was growing up in Florida, we would have tornados now and then. They were long and skinny, or fat and stubby, descending out of storm clouds to crack like a whip over our town, or poking down like the nose of a dog nudging a sand castle. The scariest thing about them—even scarier than their unpredictability—was their strength.\n I was reminded of those tornados when I first read Mike Alberti’s \“Prairie Fire, 1899.\” There are no tornados in this story, but, as the title suggests, there is a fire. A wide, merciless fire. And, as we all know, fires are merciless not because they don’t want to show mercy; they’re merciless because they’re single-minded. They only want one thing: to burn.\n The new issue of One Story is about the meeting of that fire and a mining community on the American frontier at the turn of the century. It has a classic, almost formal voice, and a narrator that moves from person to person with the ease of a spark carried on a breeze. In our Q&A, Mike Alberti describes it as “a sort of fable about the West.” It’s a remarkable, large-hearted short story with great staying power. We hope you enjoy it as much as we did.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 12,
          name: 'New York Times',
          issue: 'Sunday, April 2, 2017',
          editor: 'Dean Baquet',
          editor_url: 'http://pixel.nymag.com/imgs/daily/intelligencer/2014/05/14/14-dean-baquet.w245.h368.2x.jpg',
          edition: 'Kindle Edition',
          publication_date: '2017-03-29 0:00:01 UTC',
          pages: 200,
          img_url: 'http://a341-47.so.clients.cdn13.com/wp-content/uploads/2017/03/5sNTboycMso.jpg',
          description: "The New York Times (sometimes abbreviated NYT and The Times) is an American daily newspaper, founded and continuously published in New York City since September 18, 1851, by The New York Times Company. The New York Times has won 119 Pulitzer Prizes, more than any other newspaper",
          created_at: new Date('2017-04-02 14:55:16 UTC'),
          updated_at: new Date('2017-04-02 14:55:18 UTC')
        }),
        knex('periodicals').insert({
          id: 13,
          name: 'New York Times',
          issue: 'Sunday, April 9, 2017',
          editor: 'Dean Baquet',
          editor_url: 'http://pixel.nymag.com/imgs/daily/intelligencer/2014/05/14/14-dean-baquet.w245.h368.2x.jpg',
          edition: 'Kindle Edition',
          publication_date: '2017-03-29 0:00:01 UTC',
          pages: 200,
          img_url: 'http://a341-47.so.clients.cdn13.com/wp-content/uploads/2017/03/5sNTboycMso.jpg',
          description: "The New York Times (sometimes abbreviated NYT and The Times) is an American daily newspaper, founded and continuously published in New York City since September 18, 1851, by The New York Times Company. The New York Times has won 119 Pulitzer Prizes, more than any other newspaper",
          created_at: new Date('2017-04-09 14:55:16 UTC'),
          updated_at: new Date('2017-04-09 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('periodicals_id_seq', (SELECT MAX(id) FROM periodicals));");
    });
};
