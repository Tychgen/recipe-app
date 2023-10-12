import React from 'react'
import {Modal} from 'antd'

const AppModal = ({isModalOpen,handleOk,handleCancel, currentRecipe }) => {
  return (
      <Modal title={currentRecipe ? currentRecipe.name : ''} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {currentRecipe && (
          <div>
            <img
              src={currentRecipe.url}
              alt={currentRecipe.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <h2>{currentRecipe.name}</h2>
            <p>Rating: {currentRecipe.rating}</p>
            <p>Cooking Time: {currentRecipe.cookingTime}</p>
            <p>Serves: {currentRecipe.serves} people</p>
            <h4>Ingredients:</h4>
            <ul>
              {currentRecipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <p>{currentRecipe.instructions}</p>
          </div>
        )}
      </Modal>
  )
}

export default AppModal
