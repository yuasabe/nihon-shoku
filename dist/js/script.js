// Code goes here

jQuery(function( $ ){
  		/**
			 * Demo binding and preparation, no need to read this part
			 */
				//borrowed from jQuery easing plugin
				//http://gsgd.co.uk/sandbox/jquery.easing.php
				$.easing.elasout = function(x, t, b, c, d) {
					var s=1.70158;var p=0;var a=c;
					if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
					if (a < Math.abs(c)) { a=c; var s=p/4; }
					else var s = p/(2*Math.PI) * Math.asin (c/a);
					return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
				};
			
			// This one is important, many browsers don't reset scroll on refreshes
			// Reset all scrollable panes to (0,0)
			$('div.pane').scrollTo( 0 );
			// Reset the screen to (0,0)
			$.scrollTo( 0 );
			
			// adding a click handler for each link within the div with the id nav-list
			$('#floatdiv a').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
				$.scrollTo( this.hash, 1500, { easing:'elasout' });				
				return false;
			});

      // adding a click handler for the link at the bottom
			$('a.toNav').click(function(){//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
				var scrollTargetId = this.hash;
				$.scrollTo( scrollTargetId, 1500, { easing:'elasout' });				
				return false;
			});			

		});
	