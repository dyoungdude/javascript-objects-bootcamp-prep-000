var playlist = {The Beatles: 'Let it be'};
playlist.Slowdive = 'Alison';
playlist.My Bloody Valentine = 'Sometimes';

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = "Here's to the State of Mississipi";
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  return playlist;
}
