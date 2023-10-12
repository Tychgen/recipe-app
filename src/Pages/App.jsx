import React, { useState } from 'react';
import { Row, Col, Card, Rate, Button, Modal } from 'antd';
import '../Styles/App.css';
import mockRecipes from '../Data/data';
import AppModal from './AppModal';

const { Meta } = Card;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const showModal = (recipe) => {
    setCurrentRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Row gutter={[16, 16]}>
      {mockRecipes.map((recipe, index) => (
        <Col span={6} key={index}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
          >
            <img
              src={recipe.url}
              alt={recipe.name}
              onClick={() => showModal(recipe)}
              style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
            />
            <Meta title={recipe.name} description={`Rating: ${recipe.rating}`} />
          </Card>
          <Rate allowHalf defaultValue={recipe.rating} />
        </Col>
      ))}
      <AppModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} currentRecipe={currentRecipe}/>
    </Row>
  );
};

export default App;
