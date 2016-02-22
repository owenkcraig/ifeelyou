var data = {
		acquaintance: {
			loss: ["That's so hard.",
					"That’s really unfair.",
					"My heart goes out to you.",
					"This sucks."],
			depression: ["That's so hard.",
					"My heart goes out to you.",
					"I wish there was something I could say to make you feel better.",
					"This sucks."],
			anxiety: ["I wish there was something I could say to make you feel better.",
					"This sucks.",
					"That's so hard.",
					"My heart goes out to you."],
			trauma: ["That's so hard.",
					"That’s really unfair."]
		},
		friend: {
			loss: ["I am listening.",
					"Would you like a hug?",
					"That's so hard.",
					"That’s so unfair.",
					"This sucks.",
					"You don't deserve this."],
			depression: ["I am listening.",
					"Would you like a hug?",
					"That's so hard.",
					"I wish there was something I could say to make you feel better.",
					"This sucks.",
					"You don't deserve this."],
			anxiety: ["I am listening.",
					"That's so hard.",
					"I wish there was something I could say to make you feel better.",
					"This sucks.",
					"You don't deserve this."],
			trauma: ["I am listening.",
					"It's not your fault.",
					"That's so hard.",
					"That’s so unfair.",
					"You don't deserve this."]
		},
		family: {
			loss: ["I will sit here with you and just be.",
					"I see your pain.",
					"Would you like a hug?",
					"That’s really unfair.",
					"You don't deserve this."],
			depression: ["I will sit here with you and just be.", 
					"I see your pain.",
					"Would you like a hug?",
					"That's so hard.",
					"I will be with you every step of the way.",
					"You don't deserve this."],
			anxiety: ["I see your pain.",
					"I will be with you every step of the way.",
					"You don't deserve this.",
					"I love you and we’ll be strong together.",
					"That's so hard."],
			trauma: ["I will sit here with you and just be.",
					"I see your pain.",
					"It's not your fault.",
					"That's so hard.",
					"That’s really unfair.",
					"I will be with you every step of the way.",
					"You don't deserve this.",
					"I love you and we’ll be strong together."]
		},
		partner: {
			loss: ["I am listening.",
					"I will sit here with you and just be.",
					"I will be with you every step of the way.",
					"I see your pain.",
					"That's so hard.",
					"That’s really unfair.",
					"I love you and we'll be strong together.",
					"You don't deserve this."],
			depression: ["I am listening.",
					"I will sit here with you and just be.",
					"I will be with you every step of the way.",
					"I see your pain.",
					"That's so hard.",
					"I love you and we'll be strong together.",
					"You don't deserve this."],
			anxiety: ["I am listening.", 
					"I will be with you every step of the way.",
					"I see your pain.",
					"I love you and we'll be strong together.",
					"You don't deserve this."],
			trauma: ["I am listening.",
					"I will sit here with you and just be.",
					"I will be with you every step of the way.",
					"It's not your fault.",
					"I see your pain.",
					"That's so hard.",
					"That’s really unfair.",
					"I love you and we'll be strong together.",
					"You don't deserve this."]
		}
	}; 
	
$(function() {
	$('.relationship label').on('click',  function() {
		$('.relationship label').removeClass("selected");
		$(this).addClass("selected");
	}); //End of relationship radio button click styles

	$('.mhIssue label').on('click',  function() {
		$('.mhIssue label').removeClass("selected");
		$(this).addClass("selected");
	}); //End of mhIssue radio button click styles

	$('form').on('submit', function(e) {
		e.preventDefault();
		var pick1 = $('input[name=relationship]:checked').val();
		var pick2 = $('input[name=mhIssue]:checked').val();
		var randomDecimal = Math.random() * data[pick1][pick2].length;
		var randomRounded = Math.floor(randomDecimal);
		$('.toSay').html('<h3 class="quoteIntro">You Could Say... </h3>' + '<h3 class="quote">' + '"' + data[pick1][pick2][randomRounded] + '"' + '</h3>');
		$('.result').slideDown("slow", function() {
		});
		$('body').animate({
		        scrollTop: $("#result").offset().top
		    }, 2000);
	}); //End of form submit.

	$('.newQuoteButton').on('click', function() {
		var pick1 = $('input[name=relationship]:checked').val();
		var pick2 = $('input[name=mhIssue]:checked').val();
		var randomDecimal = Math.random() * data[pick1][pick2].length;
		var randomRounded = Math.floor(randomDecimal);
		$('.toSay').html('<h3 class="quoteIntro">You could say... </h3>' + '<h3 class="quote">' + '"' + data[pick1][pick2][randomRounded] + '"' + '</h3>');
	});
});















