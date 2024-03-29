import streamlit as st
import requests
import pandas as pd
import plotly.express as px

st.set_page_config(page_title='Dados | Passeios Turísticos de Borborema', 
                   page_icon='https://passeiosturisticosbba.vercel.app/favicon-192x192.ico', 
                   menu_items={'About': 'Análise de Dados do projeto Passeios Turísticos de Borborema. Site do projeto: https://passeiosturisticosbba.vercel.app. Github: https://github.com/alanabacco/passeios-turisticos-bba'})

st.title('Dados - Passeios Turísticos de Borborema/SP')

st.write('## Google Analytics')
csv = 'https://raw.githubusercontent.com/alanabacco/passeios-turisticos-bba/main/dados/ganalytics.csv'
df_ganalytics = pd.read_csv(csv)
st.write(df_ganalytics)

url = 'https://passeios-turisticos-bba-server.vercel.app'

st.write('## Eventos')
response = requests.get(f'{url}/eventos')
df_eventos = pd.DataFrame.from_dict(response.json())
st.dataframe(df_eventos)

st.write('## Eventos Futuros')
response = requests.get(f'{url}/eventos-futuros')
df_eventos_futuros = pd.DataFrame.from_dict(response.json())
st.dataframe(df_eventos_futuros)

st.write('## Atrações Turísticas')
response = requests.get(f'{url}/atracoes-turisticas')
df_atracoes_turisticas = pd.DataFrame.from_dict(response.json())
st.dataframe(df_atracoes_turisticas)

st.write('## Hospedagens')
response = requests.get(f'{url}/hospedagens')
df_hospedagens = pd.DataFrame.from_dict(response.json())
st.dataframe(df_hospedagens)

st.write('## Guias Turísticos')
response = requests.get(f'{url}/guias-turisticos')
df_guias_turisticos = pd.DataFrame.from_dict(response.json())
st.dataframe(df_guias_turisticos)

st.write('## Restaurantes')
response = requests.get(f'{url}/restaurantes')
df_restaurantes = pd.DataFrame.from_dict(response.json())
st.dataframe(df_restaurantes)

st.write('## Outras Informações')
response = requests.get(f'{url}/informacoes-uteis')
df_outras_informacoes = pd.DataFrame.from_dict(response.json())
st.dataframe(df_outras_informacoes)