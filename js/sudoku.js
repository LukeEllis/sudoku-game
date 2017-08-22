var Sudoku = ( function ( $ ){
 var _instance, _game,
   defaultConfig = {};

 function init( config ) {
   conf = $.extend( {}, defaultConfig, config );
   _game = new Game( conf );
   return {
     /** Public methods **/
   };
 }

 function Game( config ) {
   /** Game initialization **/
 }
 Game.prototype = {
   /** Game logic **/
 };

 /** helper functions **/

 /** Singleton public methods **/
 return {
   // Get the Singleton instance
   getInstance: function( config ) {
     if ( !_instance ) {
       _instance = init( config );
     }
     return _instance;
   }
 };
} )( jQuery );
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
var Sudoku = ( function ( $ ){
 var _instance, _game,
   defaultConfig = {};

 function init( config ) {
   conf = $.extend( {}, defaultConfig, config );
   _game = new Game( conf );
   return {
     /** Public methods **/
   };
 }

 function Game( config ) {
   /** Game initialization **/
 }
 Game.prototype = {
   /** Game logic **/
 };

 /** helper functions **/

 /** Singleton public methods **/
 return {
   // Get the Singleton instance
   getInstance: function( config ) {
     if ( !_instance ) {
       _instance = init( config );
     }
     return _instance;
   }
 };
} )( jQuery );

function buildGUI () {
	var $td, $tr,
		$table = $( '<table>' )
			.addClass( 'sudoku-container' );

	// Go over rows
	for ( var i = 0; i < 9; i++ ) {
		$tr = $( '<tr>' );
		this.$cellMatrix[i] = {};
		// Go over columns
		for ( var j = 0; j < 9; j++ ) {
			// Build the input
			this.$cellMatrix[i][j] = $( '<input>' )
				.attr( 'maxlength', 1 )
				// Keep row/col data
				.data( 'row', i )
				.data( 'col', j )
				// Listen to keyup event
				.on( 'keyup', $.proxy( this.onKeyUp, this ) );

			$td = $( '<td>' ).append( this.$cellMatrix[i][j] );
			// Calculate section ID
			sectIDi = Math.floor( i / 3 );
			sectIDj = Math.floor( j / 3 );
			// Set the design for different sections
			if ( ( sectIDi + sectIDj ) % 2 === 0 ) {
				$td.addClass( 'sudoku-section-one' );
			} else {
				$td.addClass( 'sudoku-section-two' );
			}
			// Build the row
			$tr.append( $td );
		}
		// Append to table
		$table.append( $tr );
	}
	// Return the GUI table
	return $table;
}
