import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

import { PageContainer, NoContentContainer } from '../common/Containers';
import { PageTitle } from '../common/Paragraphs';
import { searchClient, cleanClient } from "../../actions/clients.action";
import ClientCard from "./ClientCard";
import { LargeSpinner } from "../common/Spinners";
import { boldWeightFont } from "../common/style-constants";

class Clients extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.cleanClient();
  }

  handleSubmit = (data) => {
    data.preventDefault();
    const criteria = data.target[0].value;
    this.props.search(criteria);
  }

  render() {
    const { hasError, error, client, isFetching } = this.props;
    const errorMessage = (hasError) ? <ErrorMessage>{error}</ErrorMessage> : null;
    const diplayClient = (Object.keys(client).length !== 0 && !(hasError) && !(isFetching)) ? (<ClientCard client={client} />) : null;
    const spinner = (isFetching) ? (
    <NoContentContainer>
      <LargeSpinner />
    </NoContentContainer>
    ) : null;
    
    return (
      <ClientContainer>
        <ClientTitle>Search client information</ClientTitle>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBar placeholder="Enter the name or id of a client and then press ENTER..." />
        </SearchForm>
        {diplayClient}
        {spinner}
        {errorMessage}
      </ClientContainer>
    )
  }
}

const mapStateToProps = state => ({
  client: state.clients.client,
  hasError: state.clients.hasError,
  error: state.clients.error,
  isFetching: state.clients.isFetching
});

const mapDispatchToProps = dispatch => ({
  search: (criteria) => { dispatch(searchClient(criteria)) },
  cleanClient: () => { dispatch(cleanClient()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

const ClientContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientTitle = styled(PageTitle)`
  margin-right: auto;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SearchBar = styled.input`
  padding: 1em;
  font-size: 22px;
  text-align: center;
  width: 100%;
`;

const ErrorMessage = styled.h1`
  font-size: 48px;
  color: #C0392B;
  text-align: center;
  ${boldWeightFont}
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
`;