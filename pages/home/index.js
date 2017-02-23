import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import { Button, Row, Col, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'
import { MasterLayout } from '../../components/Layout'

class HomePage extends React.Component {

  componentDidMount() {
    document.title = "Records";
  }

  render() {

    const links = [
      { label: "Aircraft Records - Explorers",   "url": "/explore"},
      { label: "Technical/Cabin Log Pages",     "url": "/explore"},
      { label: "Shop Visits Records",           "url": "/explore"},
      { label: "Component Certification / GRN", "url": "/explore"}
    ]

    return (
      <MasterLayout>
        <div className="container">
        </div>
      </MasterLayout>
    );
  }

}

export default HomePage;
