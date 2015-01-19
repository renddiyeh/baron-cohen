var options = ['非常同意', '同意', '不同意', '非常不同意'];
var questions = [
{q:'我喜歡與他人一起做事，而非單獨一個人', score: [0,0,1,1]},
{q:'我喜歡用同樣的方式重覆做事', score: [1,1,0,0]},
{q:'假設我思考某件事，很容易在腦海中有圖像顯現', score: [0,0,1,1]},
{q:'我很容易專注於某件事，以致完全忽略它事的存在', score: [1,1,0,0]},
{q:'我很容易注意到很小的聲音是別人沒有留意到的', score: [1,1,0,0]},
{q:'我經常留意到類似車牌號碼等資訊', score: [1,1,0,0]},
{q:'其他人經常告訴我我又說了什麼不禮貌的事情，即使我沒有不禮貌的意思', score: [1,1,0,0]},
{q:'當我閱讀一個故事時，常常很容易想像書中角色的樣子', score: [0,0,1,1]},
{q:'我很著迷於日期的相關訊息', score: [1,1,0,0]},
{q:'在社交場合，我可以輕易跟上多個不同人的談話', score: [0,0,1,1]},
{q:'在社交場合中我覺得自在', score: [0,0,1,1]},
{q:'我容易察覺細節，是別人沒有注意到的', score: [1,1,0,0]},
{q:'我比較喜歡去圖書館而非一般宴會', score: [1,1,0,0]},
{q:'我覺得編故事是一件很容易的事', score: [0,0,1,1]},
{q:'我發現人比事有更強烈的吸引力', score: [0,0,1,1]},
{q:'我對某些事物有非常強烈的興趣，如果無法繼續探究，會有很強烈的沮喪感', score: [1,1,0,0]},
{q:'我喜歡跟他人閒聊', score: [0,0,1,1]},
{q:'當我談話時，常用別人平常較不用的字', score: [1,1,0,0]},
{q:'我非常著迷於數字', score: [1,1,0,0]},
{q:'當我閱讀一個故事時，很難去理解角色的意圖', score: [1,1,0,0]},
{q:'我不特別喜歡閱讀小說', score: [1,1,0,0]},
{q:'我覺得結交新朋友是一件困難的事', score: [1,1,0,0]},
{q:'我常常注意到事情的樣式', score: [1,1,0,0]},
{q:'我比較喜歡去電影院或戲院而非博物館', score: [0,0,1,1]},
{q:'若日常生活的作息被打斷，我並不會覺得沮喪', score: [0,0,1,1]},
{q:'我發現自己常常不知道該怎麼讓對話持續下去', score: [1,1,0,0]},
{q:'我很容易察覺別人的話中話', score: [0,0,1,1]},
{q:'我經常注意到大範圍的事情，而非局部細節', score: [0,0,1,1]},
{q:'我不容易記住電話號碼', score: [0,0,1,1]},
{q:'我不常注意到情境或人物細微的改變', score: [0,0,1,1]},
{q:'我知道如何察覺別人是否對我的談話感到無聊', score: [0,0,1,1]},
{q:'我覺得一次做很多事情很簡單', score: [0,0,1,1]},
{q:'當我講電話時，常常不確定該輪到我講話了', score: [1,1,0,0]},
{q:'我喜歡自動自發的做事', score: [0,0,1,1]},
{q:'我常是最後一個了解笑點的人', score: [1,1,0,0]},
{q:'我很容易從人們的表情知道他們的想法或感受', score: [0,0,1,1]},
{q:'當我在做一件事情被中斷時，我可以很快的回到原點，繼續做下去', score: [0,0,1,1]},
{q:'我蠻會閒聊的', score: [0,0,1,1]},
{q:'人們常常說我可以一直持續做同一件事情', score: [1,1,0,0]},
{q:'當我小的時候，我喜歡和其他孩子們玩假裝扮演性的遊戲（像是一起扮家家酒）', score: [0,0,1,1]},
{q:'我喜歡收集某些特定物品或它的相關訊息，例如：各類形式的車子、鳥、火車或植物', score: [1,1,0,0]},
{q:'我很難想像自己成為另一個人的樣子', score: [1,1,0,0]},
{q:'我喜歡很小心地計畫任何我要進行的活動', score: [1,1,0,0]},
{q:'我很享受社交場合', score: [0,0,1,1]},
{q:'我覺得很難察覺別人的意圖', score: [1,1,0,0]},
{q:'新的情境會讓我很焦慮', score: [1,1,0,0]},
{q:'我喜歡認識新朋友', score: [0,0,1,1]},
{q:'我不擅長記住人們的生日或日期', score: [0,0,1,1]},
{q:'我是一個很好的外交官', score: [0,0,1,1]},
{q:'我很擅長與孩子玩假裝性遊戲', score: [0,0,1,1]}];

$(document).ready(function () {
    var t1 = new Date();

	for (var i = 0; i < questions.length; i++) {
		var $set;
		if (i%10 == 0)
			$set = $('<div class="set"></div>');
		var $question = $('<div class="question"><h4>' + (i+1) + '. ' + questions[i].q + '</h4><div class="options"></div></div>');
		for (var j = 0; j < options.length; j++) {
			$question.find('.options').append('<div class="option"><input type="radio" name="q-' + i + '" value="' + questions[i].score[j] + '"><label>' + options[j] + '</label></div></div>');
		};
		$set.append($question);
		if(i%10 == 9){
			if (i/10 > 1) 
				$set.append('<button class="btn prev">上一頁</button>');
			if (i==49)
				$set.append('<button class="btn finish">完成！</button>');
			else
				$set.append('<button class="btn next">下一頁</button>');
			$('.main').append($set);
		}
	};
	$('label').click(function() {
		$(this).prev().attr('checked', true);
	});
	var slider = $('#slider').stupidSlider().data('stupidSlider');
	var body = $('html, body');
    $('.start').click(function() {
        $('#welcome').hide();
        $('#slider').show();
    });
	$('.next').click(function() {
		var pass = true;
		$(this).siblings().not('button').each(function() {
			if($(this).find('input:checked').length == 0){
				pass = false;
                body.animate({scrollTop: $(this).offset().top}, 200);
				$(this).css('background-color', 'rgba(255, 249, 192, 1)').delay(1000).queue(function(){
				    $(this).css('background-color', 'rgba(255, 249, 192, 0)').dequeue();
				});
				return false;
			}
		});
		if(pass) {
			body.animate({scrollTop: 0}, 200);
            slider.next();
		};
	});
	$('.prev').click(slider.previous);
	$('.finish').click(function() {
		var pass = true;
		$(this).siblings().not('button').each(function() {
			if($(this).find('input:checked').length == 0){
				pass = false;
                body.animate({scrollTop: $(this).offset().top}, 200);			
				$(this).css('background-color', 'rgba(255, 249, 192, 1)').delay(1000).queue(function(){
				    $(this).css('background-color', 'rgba(255, 249, 192, 0)').dequeue();
				});
				return false;
			}
		});
		if(pass) {
            body.animate({scrollTop: 0}, 200);
			$('#slider').hide();
			$('#result').removeClass('hidden');
			var score = 0;

            var t2 = new Date();
            var dif = t1.getTime() - t2.getTime();

            var seconds = Math.abs(dif / 1000);
			$('input:checked').each(function() {
				score += $(this).val()*1;
			});
			
			$({ Counter: 0 }).animate({ Counter: score }, {
		    	duration: 1000,
		   		step: function () {
		     		$('#score').text(Math.ceil(this.Counter));
		    	}
		  	});
            $.ajax({
                type: "POST",
                url: "db/db.php",
                data: { score: score, seconds: seconds }
            }).done(function( msg ) {
                console.log( "Data Saved: " + msg );
            });
			
		}
	});
});

// Plug-ins

(function() {

    function StupidSlider(el, options) {

        var slides, currentIndex, activeSlide, originalSlides, controls, nextCtrl, prevCtrl, timer, timerActive;

        function init() {

            // Locals
            slides       = el.children();
            activeSlide  = $(); // Default to empty object, prevent blow up
            currentIndex = 0;

            // Store a "real index" on each slide
            // This helps us keep track of where the slide started
            // When looping is enabled, the slides get removed and appended
            slides.each(function(i) {
                $(this).attr("data-index", i);
            });

            // Allow transitions, we're setup
            el.removeClass("no-transition");

            // Can't loop if there is only one slide, WHOOPS
            if (slides.length < 2) {
                options.loop = false;
                options.interval = false;
            }

            // Include "next" and "previous" buttons
            if (options.nextAndPrev) {
                makeNextAndPrev();
            }

            // Add simple controls
            if (options.controls) {
                makeControls();
            }

            // Pause timer on hover
            if (options.hoverPause && options.interval) {
                el.on("mouseover", stopTimer).on("mouseout", startTimer);
            }

            // Go To First Slide
            goToSlide(currentIndex);

            // Start the looping timer
            if (options.interval) {
                startTimer();
            }
        }


        /**
         * Create next/prev controls
         * @return {undefiend}
         */
        function makeNextAndPrev() {
            nextCtrl = $("<a>", {
                "href": "#",
                "class": options.nextCtrlClass || "stupid-next",
                "html": options.nextText || "Next"
            }).on("click", function(e) {
                e.preventDefault();
                next();
            });

            prevCtrl = $("<a>", {
                "href": "#",
                "class": options.prevCtrlClass || "stupid-prev",
                "html": options.prevText || "Previous"
            }).on("click", function(e) {
                e.preventDefault();
                previous();
            });

            el.after(prevCtrl, nextCtrl);
        }


        /**
         * Add controls navigation (1, 2, 3...)
         * @return {undefined}
         */
        function makeControls() {
            var controlWrapper, controlItems = $();

            // Control Item Wrapper
            controlWrapper = $("<ul>", {
                "class": options.controlsClass || "stupid-controls"
            }).on("click", "li", function() {
                navigateToSlide($(this).index());
            });

            // Generate Each Control Item
            for (var i = 0; i < slides.length; i++) {
                controlItems = controlItems.add(
                    $("<li>", {
                        "class": options.controlItemClass || "stupid-control",
                        "html": options.controlItemText || (i + 1)
                    })
                );
            }

            // Store These For Later
            controls = controlItems;

            // Add Controls To Wrapper
            controlWrapper.append(controlItems);

            // Append Controls To Slider
            el.after(controlWrapper);
        }


        /**
         * Go to a slide
         * @param  {int} index Index
         * @return {undefiend}
         */
        function goToSlide(index) {

            // Fire on transition callback
            if (options.onTransition) {
                options.onTransition(index);
            }

            // Are we going left or right?
            if (index > currentIndex) {
                activeSlide.removeClass("visible").addClass("old");
                activeSlide = slides.eq(index).addClass("visible").removeClass("old");
            }else{
                activeSlide.removeClass("visible");
                activeSlide = slides.eq(index).addClass("visible").removeClass("old");
            }

            // Update controls navigation
            if (options.controls) {
                controls.eq(activeSlide.attr("data-index")).addClass("active").siblings().removeClass("active");
            }

            // Make Sure We Remeber Where We Are
            currentIndex = index; 
        }


        /**
         * Navigate to a slide using a control
         * @note This needs a seperate method because the slide index changes
         * @return {undefined}
         */
        function navigateToSlide(index) {
            var currentSlide = getCurrentSlide(),
                direction    = (index > currentSlide)? "next" : "prev",
                slidesToMove = (index > currentSlide)? (index - currentSlide) : (currentSlide - index);

            for (var i = 0; i < slidesToMove; i++) {
                if (direction === "next") {
                    next();
                }else{
                    previous();
                }
            }
        }


        /**
         * Navigate to next slides
         * @return undefined
         */
        function next() {
            if ((currentIndex + 1) < slides.length) {
                goToSlide(currentIndex + 1);
            }else if ((currentIndex + 1) === slides.length && options.loop) {

                // Disable Transitions
                el.addClass("no-transition");

                // Shift Slides Around
                el.prepend(slides.last().remove());
                slides = el.children().removeClass("old");

                // Reset Index
                currentIndex = 0;

                // Trigger Reflow
                el[0].offsetHeight += 0;

                // Allow Transitions
                el.removeClass("no-transition");

                // Go!
                next();
            }
        }


        /**
         * Navigate to previous slide
         * @return undefiend
         */
        function previous() {
            if ((currentIndex - 1) >= 0) {
                goToSlide(currentIndex - 1);
            }else if ((currentIndex - 1) === -1 && options.loop) {
                // Disable Transitions
                el.addClass("no-transition");

                // Shift Slides Around
                slides.removeClass("old");
                el.prepend(slides.last().addClass("old").remove());
                slides = el.children();

                // Reset Index
                currentIndex = 0;

                // Trigger Reflow
                el[0].offsetHeight += 0;

                // Allow Transitions
                el.removeClass("no-transition");

                // Go!
                goToSlide(0);
            }
        }


        /**
         * Tear down the slider
         * @return true
         */
        function destroy() {

            // Remove classnames
            el.removeData("stupidSlider").removeClass("no-transition");
            slides.removeClass("visible old");

            // Remove Controls
            if (options.nextAndPrev) {
                nextCtrl.unbind().remove();
                prevCtrl.unbind().remove();
            }

            // Reset
            activeSlice = slides = nextCtrl = prevCtrl = el = null;

            // Clear the timer
            if (timer) {
                clearInterval(timer);
            }

            return true;
        }


        /**
         * Get the current slide index
         * @return {int} slide index
         */
        function getCurrentSlide() {
            return Number(activeSlide.attr("data-index"));
        }


        /**
         * Start a auto timer
         * @return {[type]} [description]
         */
        function startTimer() {

            // Prevent doubled instances
            if (timerActive) {
                return;
            }

            timerActive = true;
            timer = setInterval(next, options.interval);
        }


        function stopTimer() {

            // Can't remove timers that don't exist
            if (!timerActive) {
                return;
            }

            timerActive = false;
            timer = clearInterval(timer);
        }



        // Initialize Slider
        init();

        // Release Public API
        return {
            "next": next,
            "previous": previous,
            "getCurrentSlide": getCurrentSlide,
            "destroy": destroy
        };
    }


    // jQuery Public
    $.fn.stupidSlider = function(options) {
        if (!this.data("stupidSlider")) {
            return this.data("stupidSlider", new StupidSlider(this, options || {}));
        }else if (typeof options === "string") {
            // Slider already instanciated, attempt to run argument as command
            return this.data("stupidSlider")[options]();
        }
    };

}());
