import { Doughnut, Pie } from 'react-chartjs-2';

const pieOptions = {
  legend: {
    display: true,
    position: "right",
    legendCallback: function(chart) {
      // Return the HTML string here.
      console.log(chart);
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>
      ];
    }
  },
  elements: {
    arc: {
      borderWidth: 0
    },
  }
};

const data = {
  labels: ["Incoming", "Outgoing"],
  datasets: [
    {
      data: [300, 200],
      backgroundColor: ["#00c3f9", "#583afd"],
      hoverBackgroundColor: ["#00c3f9", "#583afd"]
    }
  ]
};

const options = {
  animations: {
    tension: {
      duration: 2000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true
    }
  },
  responsive: true,
  maintainAspectRatio: true,
}

export const HitRateChart = () => {
  return (
    <div style={{"max-width": "100%"}}>
      <h5 className='px-1'>Hit Rate</h5>
      <div>
      <div style={{"maxWidth": "50%", "display": "flex"}}>
      
        <Doughnut 
          data={data}  
          options={options}
          
          />
           <Pie
            data={data}
            options={options}
            
          />
        </div>
        <div style={{"maxWidth": "50%"}}>
       
      </div>
      
      </div>
    </div>
  )
}