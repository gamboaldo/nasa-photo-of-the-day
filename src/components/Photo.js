import React from "react";
import userRequest from "../hook/userRequest";
import PhotoCard from "./PhotoCard";
// import NavBar from "./Nav";
import styled from "styled-components";

export default function Data() {
  const { data, loading, error } = userRequest(
    "https://api.nasa.gov/planetary/apod?api_key=PGZGMrCnZwWQRecXqsROalxcmvyhygGql0iLL1Of"
  );

  if (loading)
    return (
      <LoadingDiv>
        <h1>LOADING .....</h1>
      </LoadingDiv>
    );
  if (error.error)
    return (
      <LoadingDiv>
        <h1>ooooopppsss!</h1>
      </LoadingDiv>
    );

  return (
    <PhotoDiv>
      <PhotoCard />
    </PhotoDiv>
  );
}

const PhotoDiv = styled.div`
  color: white;
  margin: 0 auto;
  width: 100%;
  max-width: 48rem;
  height: auto;
  padding-bottom: 1rem;
`;

const LoadingDiv = styled.div`
  color: white;
  margin-top: 15%;
`;
