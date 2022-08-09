init();

function init() {
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));

    var msgDiv = document.querySelector("#msg");

    $(document).ready(function () {
        $(".saveBtn").on("click", function () {
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");

            localStorage.setItem(time, text);
            localStorage.getItem(time, text);
            
            msgDiv.textContent = ("Saved to local storage");
        });
        function ppf() {
            var cuurent = moment().hour();

            $(".time-block").each(function () {
                var Time = parseInt($(this).attr("id").split("hour")[1]);
                    [9,10,11,12,13,14,15,16,17].forEach(hour => {
                    $(`#hour${hour} .description`).val(localStorage.getItem(`hour${hour}`));
                  });
                  

                if (Time < cuurent) {
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                    $(this).addClass("past");
                }
                else if (Time === cuurent) {
                    $(this).removeClass("past");
                    $(this).removeClass("future");
                    $(this).addClass("present");
                }
                else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");

                }
            });
        }
    ppf();
    });
}
