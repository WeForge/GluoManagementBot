module.exports={
  type: "interactionCreate",
  code: `$if[$customID==fixed;
  $deleteChannels[$channelID]$sendMessage[$getGuildVar[channelID_of_logs];
  $title[$getGuildVar[severity-$authorID-$channelID] severity bug is fixed] 
  $description[Description of bug:\n> $cropText[$getGuildVar[description-$authorID-$channelID];0;160;…]]
  $footer[Bug report closed by $username[$authorID];$userAvatar[$authorID]]
  ;false]]
  `
}
