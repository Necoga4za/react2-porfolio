import React from 'react';

function Dday() {
  const graduationDate = new Date('2026-03-01');
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  graduationDate.setHours(0, 0, 0, 0);

  const diffTime = graduationDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let dDayString;
  if (diffDays === 0) {
    dDayString = "D-Day";
  } else if (diffDays > 0) {
    dDayString = `D-${diffDays}`;
  } else {
    dDayString = `D+${Math.abs(diffDays)}`;
  }

  return (
    <div>
      <h2>🎓 졸업까지</h2>
      <p>{dDayString}</p>
    </div>
  );
}

export default Dday;
