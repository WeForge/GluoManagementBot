module.exports={type: "interactionCreate",code: `$if[$customID==fixed;
$deleteChannels[$findChannel[query;true]]$sendMessage[$getGuildVar[channelID_of_logs]];
$title[$getGlobalVar[rps-$getGuildVar[r;$guildID]] severity bug is fixed] 
$description[Description of bug:\n> $cropText[$getGlobalVar[rpd-$getGuildVar[r;$guildID]];0;160;…]]
$footer[Bug report closed by $username[$authorID];$userAvatar[$authorID]]
;false]`}
