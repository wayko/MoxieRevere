 $(document).ready(function(){
 	var currentSong;
 	
 	
 	var songlists = new Array();
 	songlists[0] = "/Audio/preciosa.mp3";
      	songlists[1] = "/Audio/ElComejen.mp3";
      	songlists[2] = "/Audio/rvdancingmoon.mp3";
var random = Math.ceil(Math.random() * songlists.length) - 1;
	currentSong = songlists[random];
	
    
      var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
			{
				mp3: currentSong
				
			}, {
				playlistOptions: {
					enableRemoveControls: true
				},
				cssSelectorAncestor: "#cp_container_1",
				swfPath: "js",
                supplied: "mp3"
              }); 
 
});
