////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('tags.items', event => {
  
  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

  // Indrev

  event.add('c:raw_lead_blocks', 'indrev:raw_lead_block')
  event.add('c:raw_silver_blocks', 'indrev:raw_silver_block')
  event.add('c:raw_tungsten_blocks', 'indrev:raw_tungsten_block')
  event.add('c:raw_tin_blocks', 'indrev:raw_tin_block')

  // Iron Rods

  event.add('c:iron_rods', 'ad_astra:iron_stick')
  
  //Warm Armor
  event.add('environmentz:warm_armor', '@mcda')

  



});
