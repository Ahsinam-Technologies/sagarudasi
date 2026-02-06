# 05. Single-Party Systems vs. Two-Party Systems

Recently, I was working with a few aspiring founders, and we spent a week brainstorming business ideas. We came up with three: 

* A **talent-matching platform** that would let managers skip straight to interviews by maintaining a pre-vetted pool of candidates ranked by actual work (GitHub commits, competitive programming scores, real projects instead of optimized resumes). 
* An **influencer marketplace** connecting brands with micro-influencers in the 20k-50k follower range, too small for agencies to care about, too scattered for brands to find efficiently. 
* And an **edtech platform matching professors with students** based on learning styles and subject expertise.

All three ideas were good. All three were also doomed, and it took us a week to figure out why. The problem wasn't the ideas themselves. It was that they were all two-sided marketplaces, and we'd walked into them like tourists wandering into a minefield. Two-sided markets look deceptively similar to normal products, but they operate on completely different physics.

## Two Kinds of Tech Products

A **single-party system** delivers value directly to one user group without needing another group present simultaneously. For example, 

* Software tools like note-taking apps, design software, coding tools
* SaaS infrastructure products
* Most content & social-media platforms where consumption doesn’t depend on other users’ presence
* AI tools where the user interacts mainly with the product, not other users

In these businesses, the product itself is the value. Every additional user independently benefits from the product. Revenues start from the day product is sold to the first user. If the technology works, you have a business.

**Two-party systems** (often called marketplaces or multi-sided platforms) only create value when two distinct groups interact. Classic examples are,

* Hiring platforms: employers ↔ candidates
* Ride-hailing: drivers ↔ riders
* Food delivery: restaurants ↔ customers
* Payment networks: merchants ↔ consumers ↔ banks
* Influencer marketplaces: brands ↔ creators
* Edtech tutoring platforms: teachers ↔ learners

Here, the platform itself is not the value. The interaction is. And interactions require both sides present simultaneously. That’s where the trouble starts.

## The Fundamental Difference

Single-sided products scale linearly with users. If Figma is worth $100 to one designer, it's worth roughly $10,000 to a hundred designers. The value lives in the product itself: the feature set, the technology, the user experience. You build something 10x better than the alternative, and people gradually switch over. Two-sided markets scale with interactions, not users. When Uber has 50 drivers and 5,000 riders in a city, adding one more driver doesn't just add one unit of value: that driver becomes available to all 5,000 riders. Add one more rider, and they can now choose from 51 drivers. The value grows combinatorially. A marketplace with $n$ participants on each side doesn't have $2n$ units of value; it has something closer to $n^2$ potential transactions.

This is why marketplaces can be worth so much more than products, but it's also why they're so much harder to get off the ground. You need critical mass on both sides simultaneously. It's like trying to start a fire in the rain. You need enough heat in enough places at the same time, or it just sputters out.

## The Cold Start Problem

Every marketplace faces the same existential question at birth: **why would suppliers join when there are no customers, and why would customers show up when there are no suppliers?** Single-sided products don't have this problem. You can launch with one user. That user gets value immediately. They tell a friend. You have two users. It's linear, manageable, predictable. 

Marketplaces have a minimum viable ecosystem, not a minimum viable product. Below a certain density, they simply don't work. A food delivery app with three restaurants isn't "a small food delivery app": it's a broken app. A freelance marketplace with twelve contractors isn't "early stage": it's useless. The thing doesn't function until both sides reach critical mass. This is why two-sided markets are almost always VC-backed and almost never bootstrapped. You can't grow organically from zero. You need to spend money to simultaneously acquire enough of both sides that the thing becomes useful to anyone. Uber didn't slowly expand driver by driver. They flooded cities with drivers, subsidized rides, and burned cash until the marketplace reached ignition.

## "Strategy Is Everything" Problem

In single-sided products, you compete on technology. You need to be 10x better than the incumbent: faster, cleaner, more powerful, easier to use. **The product is the moat.** In two-sided markets, technology is often a minor factor. **The moat is the marketplace itself**: the fact that everyone is already there. You can have technically superior infrastructure and still lose because the other guy has more buyers and sellers. 

This leads to a counterintuitive truth: early-stage marketplaces should often prioritize getting transactions to happen over building great technology. When Stripe started, merchants would submit payment information through Stripe's interface, and Stripe employees would manually process the paperwork on the backend. It wasn't automated. It wasn't scalable. But it worked, and it proved the value proposition. The technology came later, once they knew what to build.

The recruitment platform we discussed, the one matching verified talent to companies based on actual GitHub activity and competitive programming scores, is technically interesting. But it's strategically backwards. The hard part isn't the ranking algorithm. The hard part is getting both great engineers and great companies to show up at the same time. Until you solve that, the algorithm doesn't matter.

## Playbook That Has Worked

If technology doesn't solve the cold start problem of two-party systems, then what does?

**1. Start With One Side.** The best marketplaces often begin by providing value to one side independent of the other. Yelp was a tool for finding friends' recommendations before it became a restaurant discovery platform. YouTube was a video hosting service before it was a creator economy. OpenTable gave restaurants a reservation management system before diners ever showed up. You attract one side with something useful, then activate the marketplace later when you have density.

For the talent marketplace idea, this might mean building a tool that engineers actually want for themselves: a verified skill graph, a portfolio builder, a competitive programming tracker; and only introducing companies once there's a large pool of engaged users. The marketplace is the endgame, not the opening move.

**2. Subsidize one side heavily.** Uber paid drivers guaranteed hourly rates in new cities. Instacart recruited shoppers before signing up stores. You identify which side is harder to get and pay for it directly until the marketplace becomes self-sustaining. This is expensive, but there's no alternative. Markets need density to function, and sometimes you have to buy it.

**3. Manufacture initial supply yourself.** In the early days, marketplaces often fake it. Reddit's founders created fake users to make the site seem active. The first Airbnb hosts were the founders' friends. Doordash founders personally delivered food. You need something happening on the platform, even if you're the one making it happen.

**4. Narrow the market radically.** It's easier to get ten buyers and ten sellers in one neighborhood than a hundred of each scattered across a city. Uber started in San Francisco, not "San Francisco and three other cities," just San Francisco. Craigslist started with one city, one category. Facebook started with one college. You build density in one place, prove the model works, then expand. Trying to launch everywhere at once usually means you have no density anywhere.

For the influencer marketplace, this means don't try to serve all brands and all micro-influencers. Pick one niche: maybe sustainable fashion brands and influencers who post about sustainability. Get ten of each. Make it work there. Expand only after you've proven you can create value in that concentrated space.

## The Winner-Take-Most Dynamics

Single-sided products can coexist. Adobe and Figma both have users. Notion and Coda both survive. There's room for multiple good products in the same category because value lives in the product features. Two-sided markets tend toward monopoly because value lives in the network. Sellers go where the buyers are. Buyers go where the sellers are. Once one marketplace gets ahead, it becomes increasingly difficult for competitors to catch up. This is why there's one dominant ride-sharing app per city, one dominant food delivery platform, one dominant freelance marketplace per category.

This has strategic implications. If you're building a two-sided market, you're probably not building a "nice business." You're either going to win big or lose everything. There's not much middle ground. Which means you need to be honest about whether you can realistically become the dominant player. If Uber already owns your city, your ride-sharing app isn't going to be "a smaller Uber." It's going to be nothing.

Let's go back to the third idea: matching professors with students. It's actually more complex than it first appears because it's not just two-sided, it's multi-sided. You need professors willing to teach, students wanting to learn, and potentially institutions willing to credential the learning. Each side has different needs, and you can't activate one without the others. This is even harder than a standard marketplace. Now you need three-way density. Which probably means you need to eliminate one side entirely, at least at first. Maybe you're not a marketplace at all: you're a tutoring platform that pays professors directly and charges students a subscription. You've collapsed it back into a single-sided product. Or maybe you're a content platform where professors publish courses, and you only introduce the matching/marketplace layer once you have thousands of professors and millions of students.

**The point is that you can't start with the marketplace. The marketplace is what you become.**

## When to Build A Marketplace?

Given all this, when should you actually build a two-sided market? You should build one if,

1. **You have a clear path to dominance.** Remember, these are winner-take-most markets. If you can't plausibly become the biggest player, don't start.

2. **You can solve the cold start problem in a specific way.** "We'll get both sides at once" is not a plan. You need a concrete strategy: we'll start by providing value to one side independently, or we'll launch in one dense geographic area, or we'll manually fulfill supply until we reach critical mass.

3. **The market is genuinely fragmented and inefficient.** Two-sided markets work when there's a real problem with discovery and matching. Local services, gig work, niche B2B: these are fragmented. Social networks for software engineers? LinkedIn already solved that. Don't build a marketplace where Google or an existing platform is good enough.

4. **You have or can raise a lot of capital.** Bootstrapping a marketplace is possible but extremely rare. If you can't fund both sides to critical mass, you probably can't build this.

## When You Shouldn't Build A Marketplace?

You shouldn't build one if,

1. **The value is really in the technology.** If what people want is a better tool, build a better tool. Don't add marketplace complexity on top.

2. **One side has all the power.** If buyers have infinite options and sellers have none, you'll never get sellers to join. If sellers can easily go elsewhere and buyers are desperate, you'll never retain sellers. You need balanced power dynamics.

3. **The market is already dominated.** Unless you have a radically different approach or a way to attack from a niche that grows into the mainstream, you're probably not going to out-network-effect an established marketplace.

So, we realized that we need to come up with a single-sided product. No marketplace. No two-sided dynamics. Just a product that's useful to one person, and gets more useful as more people use it. Maybe one day it becomes a marketplace. Maybe companies start using it to find candidates. Maybe, it turns into the recruitment platform we originally imagined. But that's the endgame, not the opening. You build the product first, get the users, create the density, and only then do you light the marketplace fire. 

Because the physics of two-sided markets are brutal. They scale faster than products, they're worth more at scale, and they create defensible moats. But they're also harder to start, harder to fund, and they usually just die. Most ideas that look like marketplace problems are actually product problems in disguise. And most founders who think they're building the next Uber are actually just building a complicated way to go out of business. 

---

**The question isn't whether two-sided markets are good or bad.** It's whether we have a realistic plan to survive long enough to reach ignition. Most people don't. And that week of brainstorming probably saved us from building something that wouldn't have worked at all. Now, after 3 weeks of us deciding to startup, we were back to square one: **what to build?** 