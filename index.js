const express = require('express');
const app = express();

const matches = [
  {
    id: 1,
    teams: ['Team A', 'Team B'],
    date: new Date('2023-04-18T15:30:00'),
  },
  {
    id: 2,
    teams: ['Team C', 'Team D'],
    date: new Date('2023-04-20T17:00:00'),
  },
  {
    id: 3,
    teams: ['Team E', 'Team F'],
    date: new Date('2023-04-22T13:45:00'),
  },
];

app.get('/matches', (req, res) => {
  const currentDate = new Date();
  const matchesThisMonth = matches.filter(match => {
    return match.date.getMonth() === currentDate.getMonth();
  });

  const upcomingMatches = matchesThisMonth.filter(match => {
    return match.date > currentDate;
  });

  res.json(upcomingMatches);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
