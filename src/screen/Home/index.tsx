import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Category } from '../../components/Category';
import { Header } from '../../components/Header';
import theme from '../../global/theme';
import api from '../../services/api';

interface categoryProps {
    id: Number; 
    name: String;
}

export function Home() {

  const [categoryName, setCategoryName] = useState()

useEffect(() => {
  async function loadCategory() {
    try{
      const response = await api.get('categories');
      setCategoryName(
        response.data.map((item:categoryProps) => ({id:item.id, name : item.name}))
      )
    }catch(err){
      console.log(err)
    }
  }
  loadCategory();
  }, [])


  return (
    <>
      <Header />
      {
        categoryName ?
        <FlatList
          data={categoryName}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Category title={item.name} typeCategory={item.id}  />}
          showsVerticalScrollIndicator={false}
        /> :
        <ActivityIndicator 
        color={theme.colors.primary}
        style={{marginTop:18}}
        />
      }
    </>
  );
}

