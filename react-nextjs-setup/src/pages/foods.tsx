import React from 'react'
import { GetServerSideProps } from 'next'
import { cms } from '../config/contentful'

import * as S from '../styles/pages/Food'

interface IResponseFood {
  type: string
  name: string
  description: string
  featuredImage: {
    fields: {
      file: {
        url: string
      }
    }
  }
}

interface IFood {
  id: string
  type: string
  name: string
  description: string
  image: string
}

interface IFoodProps {
  foods: IFood[]
}

const Foods: React.FC<IFoodProps> = ({ foods }) => {
  return (
    <S.Container>
      <S.List>
        {foods.map(food => (
          <S.ListItem key={food.id}>
            <S.ListItemHeader>
              <strong>{food.name}</strong>
              <p>{food.description}</p>
            </S.ListItemHeader>
            <img src={food.image} alt={food.name} />
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseRecipes = await cms.getEntries({
    content_type: 'recipes'
  })

  const { items } = responseRecipes

  const foods = items.map(item => {
    const { sys, fields } = item
    const { id } = sys
    const { type, name, description, featuredImage } = fields as IResponseFood

    return {
      id,
      type,
      name,
      description,
      image: featuredImage.fields.file.url
    } as IFood
  })

  return {
    props: {
      foods
    }
  }
}

export default Foods
