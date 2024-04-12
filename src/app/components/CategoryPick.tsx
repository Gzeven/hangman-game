"use client"
import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import data from '../../../public/data.json';
import styled from 'styled-components';
import IconBack from '/public/assets/images/icon-back.svg'
import Header from './Header';
import SharedButton from './SharedButton';

const CategoryPickContainer = styled.div`
background: linear-gradient(
  180deg, 
  rgba(26, 4, 58, 0.75) 0%,   /* 75% opacity */
  rgba(21, 18, 120, 0.75) 70.31%,  /* 75% opacity */
  rgba(43, 22, 119, 0.75) 100% /* 75% opacity */
);
padding: 2.5625rem 1.5625rem 3.6875rem;
@media only screen and (min-width: 768px) {
  padding: 4.75rem 2.5rem 6.125rem;  
 }

 @media only screen and (min-width: 1024px) {
  padding: 5rem 7rem 10.4375rem;  
 }
 

`

const CategoryPickHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 3rem;
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto auto;
    h1 {
    font-size: 6.5rem;
  }
  @media only screen and (min-width: 1024px) {
    h1 {
    font-size: 8.5rem;
  }
 }
 }
`

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 6.25rem;
  display: grid; 
  grid-template-rows: auto 1fr auto;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
  margin-top: 7.125rem;
  grid-template-columns: 1fr 1fr; 
  gap: 2rem 2rem; 
 }

 @media only screen and (min-width: 1024px) {
  margin-top: 9.6875rem;
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 3.125rem 2rem; 
 }
`;

const CategoryItem = styled.li`
  background-color: var(--blue);
  color: white;
  box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF;
  border-radius: 1.25rem;
  /* padding: 1.5rem 0; */
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), #2463FF;
      box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF;
  } 
  }
  @media only screen and (min-width: 768px) {
    border-radius: 2.5rem;
 }
`;

const CategoryButton = styled.button`
font-size: 1.5rem;
text-transform: uppercase;
text-align: center;
letter-spacing: 0.05em;
width: 100%;
border: none;
background: none;
color: var(--white);
cursor: pointer;
text-align: center;
padding: 1.5rem 0;
@media only screen and (min-width: 768px) {
  font-size: 3rem;
  font-weight: light;
  padding: 4.1875rem 0;
 }
 @media only screen and (min-width: 1024px) {
  padding: 4.4375rem 0;
 }
`;

const CategoryPickPage: React.FC = () => {
  const router = useRouter();

  // Extract categories from data.json
  const categories = Object.keys(data.categories);

  // Handler function for category selection
  const handleCategorySelect = (category: string) => {
    // Navigate to InGame page with the selected category as query parameter
    router.push(`/ingame?category=${encodeURIComponent(category)}`);  
  };

  return (
    <CategoryPickContainer>
       <CategoryPickHeader>
        <SharedButton href="/">
        <Image src={IconBack} alt="Play button" /> 
        </SharedButton>
        <Header before="Pick a Category" >Pick a Category</Header>    
      
     </CategoryPickHeader>
     <CategoryList>
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            <CategoryButton onClick={() => handleCategorySelect(category)}>{category}</CategoryButton>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryPickContainer>
  );
};

export default CategoryPickPage;
