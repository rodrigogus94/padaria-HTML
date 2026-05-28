# Guia Rápido de Git para Iniciantes

[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **"O conhecimento de Git é essencial para qualquer desenvolvedor moderno"**

Este guia contém os comandos essenciais do Git que todo iniciante precisa conhecer para começar a versionar seus projetos com confiança.

## 📋 Índice

- [⚡ Comandos Rápidos](#-comandos-rápidos)
- [🔧 Configuração Inicial](#-configuração-inicial)
- [📁 Repositórios](#-repositórios)
- [📝 Trabalhando com Arquivos](#-trabalhando-com-arquivos)
- [💾 Commits](#-commits)
- [🌿 Branches](#-branches)
- [🔄 Sincronização Remota](#-sincronização-remota)
- [↩️ Desfazendo Coisas](#️-desfazendo-coisas)
- [📦 Stash](#-stash)
- [🔍 Comandos Úteis](#-comandos-úteis)
- [💡 Dicas de Ouro](#-dicas-de-ouro)
- [⚠️ Problemas Comuns](#️-problemas-comuns)
- [🎯 Fluxo de Trabalho](#-fluxo-de-trabalho-diário)

---


## 🔧 Configuração Inicial
# Configure seu nome e email (OBRIGATÓRIO)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Verifique as configurações
git config --list

# Configure o editor padrão
git config --global core.editor "code --wait"  # VS Code


## ⚡ Comandos Rápidos

git init                 # Iniciar repositório
git add .                # Adicionar tudo
git commit -m "msg"      # Salvar alterações
git push                 # Enviar para remoto
git pull                 # Baixar do remoto
git status               # Verificar status
git log --oneline        # Ver histórico
git branch               # Listar branches
git checkout -b novo     # Criar branch
git merge branch         # Mesclar branch



## 📁 Repositórios
# Cria uma pasta e entra nela
mkdir meu-projeto
cd meu-projeto

# Inicializa o Git
git init

# Cria um arquivo README
echo "# Meu Projeto" > README.md


## Clonando um repositório existente

# Clonar via HTTPS
git clone https://github.com/usuario/repositorio.git

# Clonar via SSH
git clone git@github.com:usuario/repositorio.git

# Clonar apenas um branch específico
git clone -b main --single-branch https://github.com/usuario/repositorio.git


📝 Trabalhando com Arquivos

Comandos básicos

# Ver o que mudou
git status

# Adicionar arquivos específicos
git arquivo1.js arquivo2.css

# Adicionar todos os arquivos
git add .

# Adicionar apenas arquivos de um tipo
git add *.js

# Remover arquivo (do Git e do disco)
git rm arquivo.txt

# Remover apenas do Git (mantém no disco)
git rm --cached arquivo.txt

# Renomear arquivo
git mv antigo.js novo.js


Entendendo os estados

Working Directory → [git add] → Staging Area → [git commit] → Repository
     (arquivos)                    (prontos)                    (salvos)


## 💾 Commits
Salvando suas alterações

# Commit com mensagem descritiva
git commit -m "Adiciona função de login"

# Commit mais detalhado (abre editor)
git commit

# Add + commit (apenas arquivos já versionados)
git commit -am "Atualiza documentação"

# Corrigir mensagem do último commit
git commit --amend -m "Nova mensagem"

# Adicionar arquivo esquecido ao último commit
git add arquivo-esquecido.js
git commit --amend --no-edit

## 🌿 Branches
Comandos essenciais

# Listar branches
git branch              # locais
git branch -r           # remotos
git branch -a           # todos

# Criar branch
git branch minha-feature

# Trocar de branch
git checkout minha-feature

# Criar e trocar (atalho)
git checkout -b nova-feature

# Mesclar branch atual com outra
git checkout main
git merge nova-feature

# Deletar branch
git branch -d feature-finalizada   # segura
git branch -D feature-abandonada   # forçada


Visualizando branches

# Gráfico bonito dos branches
git log --graph --oneline --all

# Visualização alternativa
git log --graph --pretty=oneline --abbrev-commit

## 🔄 Sincronização Remota
Configurando e usando remotos


# Ver repositórios remotos
git remote -v

# Adicionar remoto (GitHub/GitLab/Bitbucket)
git remote add origin https://github.com/seu-usuario/repo.git

# Primeiro push (configura upstream)
git push -u origin main

# Push normal após configurado
git push

# Enviar para branch específica
git push origin minha-branch

# Baixar alterações do remoto
git pull                 # fetch + merge
git fetch                # apenas baixa sem mesclar

# Forçar push (CUIDADO!)
git push --force         # ⚠️ use com MUITA cautela


↩️ Desfazendo Coisas
Desfazer alterações locais

# Desfazer git add (voltar do staging)
git reset arquivo.txt

# Desfazer todos os adds
git reset

# Descartar alterações de um arquivo
git checkout -- arquivo.txt

# Descartar TODAS alterações (PERIGO)
git reset --hard HEAD

Desfazendo commits

# Desfaz último commit (mantém alterações)
git reset --soft HEAD~1

# Desfaz último commit (remove do staging)
git reset --mixed HEAD~1

# Desfaz último commit (perde alterações) ⚠️
git reset --hard HEAD~1

# Desfaz commit específico (cria novo commit)
git revert commit-hash

# Remove commits mais antigos
git reset --hard commit-hash

📦 Stash
Guardando trabalho temporário

# Guardar alterações atuais
git stash

# Guardar com descrição
git stash save "WIP: função login incompleta"

# Listar stashes
git stash list

# Aplicar último stash (mantém guardado)
git stash apply

# Aplicar stash específico
git stash apply stash@{2}

# Aplicar e remover stash
git stash pop

# Remover stash específico
git stash drop stash@{1}

# Remover todos stashes
git stash clear

# Criar branch a partir de stash
git stash branch minha-branch

## 🔍 Comandos Úteis

# Histórico detalhado
git log
git log --oneline
git log --graph --all

# Diferenças
git diff                  # mudanças não stageadas
git diff --staged        # mudanças stageadas
git diff branch1 branch2 # entre branches

# Quem alterou cada linha
git blame arquivo.js

# Buscar texto em commits
git grep "palavra"
git log -S "palavra"

# Estatísticas
git shortlog -s          # commits por autor
git log --stat           # estatísticas de arquivos

💡 Dicas de Ouro
✅ SEMPRE faça:

git status               # antes de tudo
git pull                 # antes de push
git commit -m "claro e descritivo"


❌ NUNCA faça:

git push --force          # em branch compartilhado
git reset --hard          # sem ter certeza
git commit -m "fix"       # mensagem vaga

🤔 O que fazer em caso de dúvida:

git status           # qual meu estado atual?
git log --oneline    # qual foi meu último commit?
git diff             # o que eu mudei?


🛠️ Resolvendo conflitos de merge

# 1. Identifique os conflitos
git status

# 2. Edite os arquivos com conflito (procurar por <<<<<<<)

# 3. Adicione os resolvidos
git add arquivo-resolvido.txt

# 4. Finalize o merge
git commit -m "Resolve conflitos no arquivo X"

# 5. Para abortar um merge problemático
git merge --abort


🎯 Fluxo de Trabalho Diário
Fluxo básico (trabalho solo)

git pull                    # 1. Pegar atualizações
# ... fazer alterações ...
git status                  # 2. Verificar mudanças
git add .                   # 3. Adicionar tudo
git commit -m "descrição"   # 4. Salvar commit
git push                    # 5. Enviar ao remoto

Fluxo com branches (trabalho em equipe)

git checkout -b feature/nova-funcionalidade   # 1. Criar branch
# ... desenvolver ...
git add .
git commit -m "Adiciona nova funcionalidade"
git push -u origin feature/nova-funcionalidade # 2. Enviar branch

# Abrir Pull Request no GitHub...

git checkout main                               # 3. Voltar ao main
git pull                                        # 4. Atualizar
git branch -d feature/nova-funcionalidade      # 5. Deletar branch

📝 Comandos Específicos por Situação
"Esqueci de dar add antes do commit"

git add arquivo-esquecido.txt
git commit --amend --no-edit

"Quero voltar um arquivo pra versão anterior"

git checkout commit-hash -- arquivo.txt
# Ou
git restore --source commit-hash arquivo.txt

"Fiz commit no branch errado"

git reset HEAD~1 --soft
git stash
git checkout branch-correto
git stash pop
git commit -m "mensagem"

"Preciso salvar trabalho sem commit"

git stash save "descrição"
# depois para voltar:
git stash pop
