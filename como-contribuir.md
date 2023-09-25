# Como contribuir

Para enviar seus commits a um projeto no GitHub que pertence a outra pessoa, você normalmente usará um processo chamado "fork" e, em seguida, criar uma "pull request". Aqui está um guia passo a passo sobre como fazer isso:

1. **Faça um Fork do repositório que deseja colaborar**:

   - Acesse o repositório do GitHub para o qual deseja contribuir (nesse caso, esse aqui https://github.com/alanabacco/passeios-turisticos-bba)
   - Clique no botão "Fork" no canto superior direito da página do repositório. Isso criará uma cópia do repositório em sua conta do GitHub.

2. **Clone seu repositório forkado**:

   - No seu perfil do GitHub, encontre o repositório que você acabou de fazer fork.
   - Clique no botão "Code" e copie a URL do repositório.
   - No seu terminal, navegue até a pasta onde deseja clonar o repositório e execute o seguinte comando, substituindo <URL_DO_REPOSITORIO> pela URL que você copiou
     ```bash
     git clone <URL_DO_REPOSITORIO>
     ```

3. **Crie uma nova branch**:

   - Navegue até o diretório do repositório clonado usando o comando `cd` no seu terminal.
   - Crie uma nova branch para suas alterações. Você pode dar a ele um nome descritivo, como "nova-pagina" ou "alteracao-layout":

     ```bash
     git checkout -b nome-do-seu-branch
     ```

   - Após isso, faça as configurações necessárias que estão em [Como executar o projeto localmente](https://github.com/alanabacco/passeios-turisticos-bba#como-executar-o-projeto-localmente), a partir de "Para rodar o backend".

4. **Faça alterações no código e faça commit**:

   - Faça suas mudanças ou adições de código dentro deste branch.
   - Você pode usar a interface do VS Code para fazer o commit das alterações, ou pode usar o terminal:
   - Para usar o terminal, use os seguintes comandos para preparar e commitar suas alterações:
     ```bash
     git add . # cuidado: isso adiciona todos os arquivos alterados
     git commit -m "Sua mensagem de commit aqui"
     ```

5. **Envie suas alterações para seu Fork**:

   - Envie seu branch com os novos commits para o seu fork no GitHub:
     ```bash
     git push origin nome-do-seu-branch
     ```

6. **Crie uma solicitação de Pull Request (PR)**:

   - Acesse a página do seu repositório fork no GitHub.
   - Você verá uma mensagem indicando que você acabou de fazer push para a sua nova branch. Clique no botão "Compare & pull request" ao lado dessa mensagem.

7. **Revise e envie a solicitação de Pull Request**:

   - Adicione um título e uma descrição à sua solicitação de pull, explicando as alterações que você fez.
   - Revise suas alterações e, se tudo estiver correto, clique no botão "Create pull request".

8. **Colabore e Discuta**:

   - Seu colega (o proprietário do repositório original) receberá uma notificação sobre sua solicitação de pull. Podem revisar suas alterações, fornecer feedback e discutir quaisquer alterações necessárias.

9. **Mescle a solicitação de Pull**:

   - Se suas alterações forem aprovadas, seu colega pode mesclar sua solicitação de pull no repositório original.

10. **Sincronize seu Fork** (Opcional):
    - Para manter seu fork atualizado com as alterações no repositório do seu colega, você pode periodicamente buscar as alterações do repositório original e mesclá-las no seu fork (usando `git pull`).

Essa é a base do processo de contribuição para um projeto no GitHub.
