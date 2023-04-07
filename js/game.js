let c, d
$(document).ready (() => {
  c = new Carder ({ iconPrefix: 'img/' })
  const config = {
    carder: c,
    debug: true,
    meterIconPrefix: 'meters/',
    meters: [{ name: 'food' },
	     { name: 'fame' },
	     { name: 'gold' }],
    cards: [{ html: 'hello', priority: 2, limit: 1, left: { reward: { coins: .1 } } },
	    { html: 'world', priority: 1, limit: 1 },
	    { when: 'start',
	      cssClass: 'title',
	      cards: [{ html: 'filler', cool: 1 },
		      { html: 'test card',
			limit: 2,
			cool: 1,
			left: { scaledReward: { coins: .1 }, sequence: { cssClass: 'bonus', cards: [{cssClass:"warning",html:"one"},["two",2],"three"] } },
			right: { stage: 'muppet', scaledReward: { coins: -.1 }, reward: { castle: .2 } } }] },
	    { html: 'Time passes...', priority: -1 }],
    status: (gs) => `Supplies: ${gs.food} <p> Notoriety: ${gs.fame} <p> Treasure: ${gs.gold}`
  }
  d = new Dealer (config)
  d.dealFirstCard()
})
