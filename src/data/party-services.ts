/** Original list from the contest client's shared brief (100 items in 10 categories).
 * Illustration photos are illustrative concepts, not inventory claims.
 */
export type PartyService = { number: number; name: string; description: string };
export type PartyServiceGroup = {
  id: string; number: number; title: string; tagline: string; intro: string;
  image: string | null; items: PartyService[];
};
export const serviceGroups: PartyServiceGroup[] = [
  {
    "id": "group-1",
    "number": 1,
    "title": "Giant games & competitive challenges",
    "tagline": "Big games, bigger laughs",
    "intro": "Turn a ballroom foyer into a playful arena for teams and friends.",
    "image": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=760&q=80",
    "items": [
      {
        "number": 1,
        "name": "Giant human foosball",
        "description": "Guests become the players on a life-sized foosball court. Excellent for team competitions in the foyer."
      },
      {
        "number": 2,
        "name": "Giant Jenga",
        "description": "Oversized wooden blocks, with forfeits or funny challenges for the losing player."
      },
      {
        "number": 3,
        "name": "Inflatable boxing ring",
        "description": "Guests wear oversized gloves and compete in supervised, lighthearted bouts."
      },
      {
        "number": 4,
        "name": "Mechanical bull riding",
        "description": "A crowd-pleasing attraction with an inflatable safety bed and operator."
      },
      {
        "number": 5,
        "name": "Inflatable obstacle course",
        "description": "Timed races between colleagues or friends."
      },
      {
        "number": 6,
        "name": "Human-sized inflatable bowling",
        "description": "guests become the bowling ball."
      },
      {
        "number": 7,
        "name": "Giant Connect Four",
        "description": "oversized strategy game."
      },
      {
        "number": 8,
        "name": "Portable mini golf course",
        "description": "themed holes, obstacles and scorecards."
      },
      {
        "number": 9,
        "name": "Electronic reaction wall",
        "description": "race to hit illuminated targets."
      },
      {
        "number": 10,
        "name": "Basketball arcade shooting machines",
        "description": "timed head-to-head competitions."
      }
    ]
  },
  {
    "id": "group-2",
    "number": 2,
    "title": "Carnival games & ridiculous challenges",
    "tagline": "Step right up",
    "intro": "Fairground-style competition, prizes and unapologetic fun.",
    "image": null,
    "items": [
      {
        "number": 11,
        "name": "Carnival midway booths",
        "description": "a row of games with tickets and prizes."
      },
      {
        "number": 12,
        "name": "High-striker strength tester",
        "description": "hit the lever to ring the bell."
      },
      {
        "number": 13,
        "name": "Ring toss challenge",
        "description": "win drinks, gifts or mystery prizes."
      },
      {
        "number": 14,
        "name": "Darts and balloon pop",
        "description": "use a safe, supervised dart setup."
      },
      {
        "number": 15,
        "name": "Duck fishing game",
        "description": "a nostalgic carnival-style booth."
      },
      {
        "number": 16,
        "name": "Plinko prize wall",
        "description": "drop a disc and win whatever slot it lands in."
      },
      {
        "number": 17,
        "name": "Lucky spin wheel",
        "description": "prizes, dares, challenges or bonus points."
      },
      {
        "number": 18,
        "name": "Giant dice challenge",
        "description": "roll the dice to determine a task or prize."
      },
      {
        "number": 19,
        "name": "Mini casino tables",
        "description": "blackjack, roulette and poker using play money."
      },
      {
        "number": 20,
        "name": "Mystery prize vending machine",
        "description": "guests earn tokens to win surprise gifts."
      }
    ]
  },
  {
    "id": "group-3",
    "number": 3,
    "title": "Photo, video & social-media experiences",
    "tagline": "Take the spotlight",
    "intro": "Photo-ready moments, creative captures and instant keepsakes.",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=760&q=80",
    "items": [
      {
        "number": 21,
        "name": "360-degree video booth",
        "description": "dramatic rotating videos with music and effects."
      },
      {
        "number": 22,
        "name": "Glam photo booth",
        "description": "professional lighting, flattering portraits and instant prints."
      },
      {
        "number": 23,
        "name": "AI transformation booth",
        "description": "turn guests into movie stars, superheroes or magazine-cover models."
      },
      {
        "number": 24,
        "name": "Green-screen studio",
        "description": "transport guests to fictional destinations."
      },
      {
        "number": 25,
        "name": "Slow-motion video booth",
        "description": "capture hair flips, dance moves and flying props."
      },
      {
        "number": 26,
        "name": "Glamour portrait studio",
        "description": "professional photographer and instant digital delivery."
      },
      {
        "number": 27,
        "name": "Confessional video booth",
        "description": "guests record anonymous or named messages and funny stories."
      },
      {
        "number": 28,
        "name": "Roaming event photographer",
        "description": "candid photographs throughout the venue."
      },
      {
        "number": 29,
        "name": "Custom magazine-cover station",
        "description": "guests appear on a personalised magazine cover."
      },
      {
        "number": 30,
        "name": "Digital caricature artist",
        "description": "illustrated portraits delivered digitally or printed on-site."
      }
    ]
  },
  {
    "id": "group-4",
    "number": 4,
    "title": "Performers & roaming entertainment",
    "tagline": "Unexpected encounters",
    "intro": "Walkaround acts, stage moments and jaw-dropping performances.",
    "image": null,
    "items": [
      {
        "number": 31,
        "name": "LED robot performers",
        "description": "futuristic dancers for a dramatic entrance."
      },
      {
        "number": 32,
        "name": "Stilt walkers",
        "description": "towering performers greeting guests in the foyer."
      },
      {
        "number": 33,
        "name": "Close-up magicians",
        "description": "interactive magic at cocktail tables."
      },
      {
        "number": 34,
        "name": "Mentalists",
        "description": "mind-reading demonstrations and psychological illusions."
      },
      {
        "number": 35,
        "name": "Roaming caricature artists",
        "description": "quick personalised portraits."
      },
      {
        "number": 36,
        "name": "Living statues",
        "description": "performers who suddenly come to life."
      },
      {
        "number": 37,
        "name": "Fire performers",
        "description": "only in an approved outdoor or suitably licensed safe area."
      },
      {
        "number": 38,
        "name": "Aerial performers",
        "description": "suspended acrobatic acts, subject to structural rigging approval."
      },
      {
        "number": 39,
        "name": "Professional dance crew",
        "description": "hip-hop, commercial dance or a surprise flash mob."
      },
      {
        "number": 40,
        "name": "Impersonators and celebrity lookalikes",
        "description": "guests mingle with performers dressed as famous personalities."
      }
    ]
  },
  {
    "id": "group-5",
    "number": 5,
    "title": "Music, dancing & nightclub equipment",
    "tagline": "Turn up the energy",
    "intro": "Build the dance floor experience from headphones to lighting.",
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=760&q=80",
    "items": [
      {
        "number": 41,
        "name": "Silent disco headphones",
        "description": "multiple DJs or music channels at the same time."
      },
      {
        "number": 42,
        "name": "LED dance floor",
        "description": "illuminated flooring for the main ballroom."
      },
      {
        "number": 43,
        "name": "Karaoke booth",
        "description": "private singing rooms or open-stage karaoke."
      },
      {
        "number": 44,
        "name": "Professional DJ booth",
        "description": "DJ, sound system, lighting and mixing equipment."
      },
      {
        "number": 45,
        "name": "Live band",
        "description": "party classics, pop, rock or dance music."
      },
      {
        "number": 46,
        "name": "Glow-in-the-dark UV zone",
        "description": "blacklights, neon props and fluorescent décor."
      },
      {
        "number": 47,
        "name": "CO₂ effects cannons",
        "description": "dramatic bursts for dance-floor moments, subject to venue approval."
      },
      {
        "number": 48,
        "name": "LED foam batons and light-up accessories",
        "description": "party favours guests can use on the dance floor."
      },
      {
        "number": 49,
        "name": "Interactive LED dance wall",
        "description": "visuals react to movement or music."
      },
      {
        "number": 50,
        "name": "Silent karaoke challenge",
        "description": "guests perform while the audience hears only their own headphone channel."
      }
    ]
  },
  {
    "id": "group-6",
    "number": 6,
    "title": "Food, drinks & interactive tasting stations",
    "tagline": "A taste of the party",
    "intro": "Interactive bars, dessert experiences and gourmet treats.",
    "image": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=760&q=80",
    "items": [
      {
        "number": 51,
        "name": "Live cocktail mixology bar",
        "description": "bartenders create personalised drinks."
      },
      {
        "number": 52,
        "name": "Molecular mixology station",
        "description": "theatrical cocktail techniques and unusual presentations."
      },
      {
        "number": 53,
        "name": "Mocktail laboratory",
        "description": "colourful creations for non-drinkers and designated drivers."
      },
      {
        "number": 54,
        "name": "Nitrogen ice cream station",
        "description": "ice cream prepared with theatrical cold vapour effects by trained operators."
      },
      {
        "number": 55,
        "name": "Chocolate fountain station",
        "description": "fruit, marshmallows and sweet treats."
      },
      {
        "number": 56,
        "name": "Gourmet popcorn bar",
        "description": "unusual seasonings and custom packaging."
      },
      {
        "number": 57,
        "name": "Live dessert flambé station",
        "description": "prepared by qualified chefs under approved conditions."
      },
      {
        "number": 58,
        "name": "Blindfolded tasting challenge",
        "description": "guests guess flavours, snacks or drinks."
      },
      {
        "number": 59,
        "name": "Cheese and gourmet tasting stations",
        "description": "guided tastings with scorecards."
      },
      {
        "number": 60,
        "name": "Personalised candy bar",
        "description": "sweets, jars, take-home bags and custom labels."
      }
    ]
  },
  {
    "id": "group-7",
    "number": 7,
    "title": "Foyer attractions & immersive experiences",
    "tagline": "A spectacular entrance",
    "intro": "Immersive environments and unforgettable foyer discoveries.",
    "image": null,
    "items": [
      {
        "number": 61,
        "name": "Ball pit for adults",
        "description": "a giant ball pit with a photo-friendly design."
      },
      {
        "number": 62,
        "name": "Neon tunnel entrance",
        "description": "an illuminated walk-through entrance with music and lighting."
      },
      {
        "number": 63,
        "name": "Red-carpet paparazzi experience",
        "description": "photographers, velvet ropes and a celebrity-style entrance."
      },
      {
        "number": 64,
        "name": "Secret speakeasy lounge",
        "description": "a hidden bar or lounge behind a disguised entrance."
      },
      {
        "number": 65,
        "name": "Immersive themed room",
        "description": "transform a foyer section into a casino, futuristic world or tropical escape."
      },
      {
        "number": 66,
        "name": "Mirror maze",
        "description": "a temporary walk-through maze with mirrored walls."
      },
      {
        "number": 67,
        "name": "LED infinity mirror installation",
        "description": "a dramatic optical illusion for photographs."
      },
      {
        "number": 68,
        "name": "Giant inflatable lounge furniture",
        "description": "oversized sofas, chairs and playful seating."
      },
      {
        "number": 69,
        "name": "Mosaic photo wall",
        "description": "guests add their photos to build one giant image or event logo."
      },
      {
        "number": 70,
        "name": "Interactive graffiti wall",
        "description": "guests create collaborative artwork using approved markers or digital drawing tools."
      }
    ]
  },
  {
    "id": "group-8",
    "number": 8,
    "title": "Adrenaline, skill & unusual experiences",
    "tagline": "Challenge accepted",
    "intro": "Skill-based games, tech-powered thrills and friendly contests.",
    "image": null,
    "items": [
      {
        "number": 71,
        "name": "VR gaming arena",
        "description": "multiplayer virtual reality games with staff supervision."
      },
      {
        "number": 72,
        "name": "Professional racing simulators",
        "description": "realistic racing rigs with leaderboards."
      },
      {
        "number": 73,
        "name": "Portable escape-room challenge",
        "description": "solve puzzles against the clock."
      },
      {
        "number": 74,
        "name": "Archery tag",
        "description": "supervised team games using foam-tipped arrows, with suitable protective equipment."
      },
      {
        "number": 75,
        "name": "Laser tag arena",
        "description": "temporary indoor battlefield with barriers and scoring."
      },
      {
        "number": 76,
        "name": "Portable axe-throwing experience",
        "description": "only with a professional operator, suitable safety barriers and venue approval."
      },
      {
        "number": 77,
        "name": "Fencing challenge",
        "description": "introductory bouts with trained instructors and protective gear."
      },
      {
        "number": 78,
        "name": "Golf simulator",
        "description": "virtual driving ranges and closest-to-the-pin competitions."
      },
      {
        "number": 79,
        "name": "Table tennis tournament",
        "description": "portable tables with a knockout competition."
      },
      {
        "number": 80,
        "name": "Human claw machine",
        "description": "guests stand on a platform and use a harness-operated system to grab oversized prizes, provided a qualified operator and appropriate safety arrangements are available."
      }
    ]
  },
  {
    "id": "group-9",
    "number": 9,
    "title": "Pampering, novelty & adult indulgences",
    "tagline": "A little indulgence",
    "intro": "Personalisation, pampering and playful novelty experiences.",
    "image": null,
    "items": [
      {
        "number": 81,
        "name": "Express massage lounge",
        "description": "professional therapists provide short chair massages."
      },
      {
        "number": 82,
        "name": "Temporary tattoo artists",
        "description": "metallic, minimalist or themed body art."
      },
      {
        "number": 83,
        "name": "Glitter bar",
        "description": "glitter makeup, face gems and festival-style looks."
      },
      {
        "number": 84,
        "name": "Professional makeup touch-up station",
        "description": "quick transformations before photographs."
      },
      {
        "number": 85,
        "name": "Perfume-blending workshop",
        "description": "guests create personalised fragrances."
      },
      {
        "number": 86,
        "name": "Custom sneaker personalisation",
        "description": "artists customise sneakers or canvas shoes."
      },
      {
        "number": 87,
        "name": "Live calligraphy and engraving",
        "description": "personalise glasses, accessories or gifts."
      },
      {
        "number": 88,
        "name": "Cigar-rolling demonstration",
        "description": "a specialist demonstrates the craft in an approved, well-ventilated area."
      },
      {
        "number": 89,
        "name": "Premium grooming bar",
        "description": "quick hairstyling, beard grooming or hair touch-ups."
      },
      {
        "number": 90,
        "name": "Fortune-telling lounge",
        "description": "tarot readers, palm readers or astrology-themed entertainment offered as novelty experiences."
      }
    ]
  },
  {
    "id": "group-10",
    "number": 10,
    "title": "Big-ticket attractions & unforgettable spectacles",
    "tagline": "Save the grand finale",
    "intro": "Statement attractions and spectacular event moments.",
    "image": null,
    "items": [
      {
        "number": 91,
        "name": "Inflatable slide",
        "description": "a large slide for a playful, carnival-style atmosphere, subject to ceiling height and venue approval."
      },
      {
        "number": 92,
        "name": "Mobile game-show stage",
        "description": "podiums, buzzers, scoreboards, emcee and customised quiz rounds."
      },
      {
        "number": 93,
        "name": "Cash-grab wind booth",
        "description": "guests catch flying coupons or prize vouchers inside an enclosed booth."
      },
      {
        "number": 94,
        "name": "Prize claw machine",
        "description": "a giant or commercial claw machine filled with gifts."
      },
      {
        "number": 95,
        "name": "Interactive digital graffiti tunnel",
        "description": "projection-based artwork that responds to movement."
      },
      {
        "number": 96,
        "name": "Indoor drone light performance",
        "description": "only if the venue, operator and aviation requirements permit it."
      },
      {
        "number": 97,
        "name": "Confetti and streamer cannons",
        "description": "coordinated finale effects approved by the ballroom."
      },
      {
        "number": 98,
        "name": "Giant LED screen gaming tournament",
        "description": "console games or esports competitions with live commentary."
      },
      {
        "number": 99,
        "name": "Human slot machine or prize reveal installation",
        "description": "a theatrical, oversized game where guests trigger a prize reveal."
      },
      {
        "number": 100,
        "name": "Surprise celebrity or headline performer",
        "description": "a comedian, singer, DJ or entertainer who appears unexpectedly during the evening."
      }
    ]
  }
];
export const allPartyServices: PartyService[] = serviceGroups.flatMap(group => group.items);
