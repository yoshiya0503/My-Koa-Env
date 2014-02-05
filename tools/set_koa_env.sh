source ~/.nvm/nvm.sh
_NODE_VERSION=0.11.9
nvm use $_NODE_VERSION

if [ $? -ne 0 ]; then
    echo 'prease install node version 0.11.9'
    echo 'install node-v0.11.9 by nvm? (y/n)'
    read ask
    case $ask in
        y) nvm install $_NODE_VERSION
            nvm use $_NODE_VERSION;;
        n) echo 'skip install ...'
            return 0;;
        *) echo 'skip install ...'
            return 0;;
    esac
fi

alias node='node -harmony'
