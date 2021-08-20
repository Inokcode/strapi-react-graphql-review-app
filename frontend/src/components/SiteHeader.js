import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Icode Reviews</h1>
      </Link>
    </div>
  );
}
