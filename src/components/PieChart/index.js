import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const COLORS = ['#00C49F', '#FF8042', '#FFBB28']

const PieChart = props => {
  const {recentMatchesData} = props
  const recentMatches = recentMatchesData?.recentMatches || []

  const winCount = recentMatches.filter(match => match.matchStatus === 'Won')
    .length
  const lossCount = recentMatches.filter(match => match.matchStatus === 'Lost')
    .length
  const drawCount = recentMatches.filter(
    match => match.matchStatus === 'Drawn' || match.matchStatus === 'Tie',
  ).length

  const data = [
    {name: 'Wins', value: winCount},
    {name: 'Losses', value: lossCount},
    {name: 'Draws/Ties', value: drawCount},
  ]

  return (
    <div className="pie-chart-bg-container mt-2 d-flex justify-content-center">
      <PieChartComponent width={400} height={350}>
        <Pie
          data={data}
          innerRadius={0}
          outerRadius={100}
          dataKey="value"
          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChartComponent>
    </div>
  )
}

export default PieChart
