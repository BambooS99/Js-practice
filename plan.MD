Here is the tiered list for mid-level JS/React interviews:

Tier 1: Must Know Cold (Asked in 95% of interviews)
map: Transform every item 
→
→ returns new array.
filter: Keep items passing condition 
→
→ returns new array.
reduce: Accumulate into a single value/object/map.
find / findIndex: Get first match (or index) 
→
→ stops searching early.
some / every: Check conditions 
→
→ returns boolean, short-circuits.
includes: Primitive check 
→
→ returns boolean.
Tier 2: Highly Expected (Daily work + common interview traps)
slice vs splice:
slice: Pure, non-mutating copy/sub-array.
splice: Mutates original, adds/removes elements.
sort:
Gotcha: Sorts alphabetically by default ([10, 2].sort() gives [10, 2]).
Gotcha: Mutates original array in-place.
flat / flatMap: Flatten nested structures (e.g., store inventories).
concat / spread ([...]): Merging and non-mutating copies.
Tier 3: Bonus / Modern JS (Looks impressive)
toSorted / toReversed / toSpliced: Modern immutable versions of mutating methods.
Array.from(): Convert iterables/node-lists or generate ranges (Array.from({ length: 5 })).
Object.entries() / Object.values(): Converting objects to arrays for manipulation.