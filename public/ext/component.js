// Chart Component
var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Nov 5", "Nov 6", "Nov 7", "Nov 8", "Nov 9", "Nov 10", "Nov 11", "Nov 12", "Nov 13", "Nov 14", "Nov 15", "Nov 16", "Nov 17", "Nov 18", "Nov 19", "Nov 20", "Nov 21", "Nov 22", "Nov 23", "Nov 24", "Nov 25", "Nov 26", "Nov 27", "Nov 28", "Nov 28", "Nov 29", "Nov 30", "Dec 1", "Dec 2", "Dec 3", "Dec 4", "Dec 5"],
                datasets: [{
                    label: 'from this day',
                    data: [19, 2, 2, 2, 2, 2, 9, 9, 2, 2, 2, 2, 2, 2, 12, 2, 2, 2, 2, 2, 3, 5, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
                    backgroundColor: '#e8f6e9',
                    borderColor: '#458549',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 50,
                        bottom: 50
                    }
                },
                title: {
                    display: true,
                    text: 'Revenue for Nov 5 2018 - December 4 2018 NGN 1,875.00',
                }
            }
        });
     




openNav();
// --Side Navigation Component
function openNav() {
    
    document.getElementById("mySidenav").style.width = "100%";
   document.getElementById("mySidenav").style.display = "block";
   
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("mySidenav").style.display = "none";
}




// --- Removeable later
// --- Interactions
document.getElementById("go_live").addEventListener("click", function(){
    var x = document.getElementById("go_live").className;
    if (x = 'fa fa-toggle-on fa-1x'){
        document.getElementById("go_live").className = 'fa fa-toggle-off fa-1x';
    }
});