# Dofus Duo
Dofus duo api is an api to get the best duo for you in dofus. I am really tired of playing alone so I decided to make this api to help me and all others who fell like me to find a duo partners to complete quests, UP, PVP and all about this amazing game.

Soon i will be adding a web interface to make it easier to use, and publish an android and IOS app to make it easier to use on the go.

## Running locally
To run the api locally you will need to have Docker and Docker Compose installed. Then you can run the following command to start the api:

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```
- Copy the .env.example file to .env `cp .env.example .env`
- Run `./vendor/bin/sail up -d`

You can find more information about the sail command in the [Laravel Sail documentation](https://laravel.com/docs/9.x/sail#installing-composer-dependencies-for-existing-projects).

## Contributing
Fell free to contribute to this project, I will be happy to review and accept your pull requests.
Please follow some good practices when contributing to this project:
- Always test your code before submitting a pull request
- Be nice and polite with other contributors
- Follow the PSR-12 coding standard
- Follow the SOLID principles
- Follow the DRY principle
- Be clear and concise in your commit messages
- Be clear and concise in your classes, functions and variables names
