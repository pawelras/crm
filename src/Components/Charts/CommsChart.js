import { Doughnut } from 'react-chartjs-2';

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
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true
    }
  },
  responsive: true,
  maintainAspectRatio: true,
}

export const CommsChart = () => {
  return (
    <div className='mh-100'>
      <Doughnut data={data} options={options} width={10}/>
    </div>
  )
}