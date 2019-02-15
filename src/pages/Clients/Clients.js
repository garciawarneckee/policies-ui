import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

import { DefaultContainer } from '../../components/common/Containers';
import { Title } from '../../components/common/Paragraphs';
import { searchClient } from "../../actions/clients.action";

class Clients extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (data) => {
    data.preventDefault();
    const criteria = data.target[0].value;
    this.props.search(criteria);
  }

  render() {
    const client = (this.props.client) ? (
      <div>
        <p>{this.props.client.name}</p>
        <p>{this.props.client.email}</p>
        <p>{this.props.client.role}</p>
      </div>
    ) : null;
    return (
      <DefaultContainer>
        <Title>Search client information</Title>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBar placeholder="Search clients by id or name..." />
        </SearchForm>
        {client}
      </DefaultContainer>
    )
  }
}

const mapStateToProps = state => ({
  client: state.clients.client
});

const mapDispatchToProps = dispatch => ({
  search: (criteria) => { dispatch(searchClient(criteria)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 1em;
  font-size: 22px;
  text-align: center;
`;
