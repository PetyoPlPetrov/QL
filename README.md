# Quicklux

The current solution is going to focus on one single aspect from the requirments file - the extendable architecture,skeleton to be used in all future websites. I will solve the current problem as I consider it most challanging, yet for the other problem areas I would depend on same or similar patterns,as bellow.

The solution project has the following structure

- apps
  - quicklux-greens
  - quicklux-homemade

- libs

  - quicklux-ui (tests)
    - atoms
    - hocs
    - molecules
    - organisms
    - pages
    - templates

  - quicklux-utils (all website features) (tests)

    - authentication
    - authorization
    - checkout
    - foodBuilder - UI resuable feature(business logic + Ui)
    - context
    - hooks
    - utils
        - useDelayedAPi - wrapper on api handling data,error and loading cases. (tests)
        - useStateMachine - eleminate useEffect needs (tests)

- themes (tessts)
  - quicklux-green theme
  - quicklux-homemde theme

# Run the project

    Run `npm i` in quicklux dir.
    - npm run start-quicklux-greens - run the first app
    - npm run start-quicklux-homemade - run the other website
    - npm run tests

# Overview

    The app (every app in quicklux/apps) is just a consumer. The UI components (dump and smart) are situated in UI folder.
    The encapluslated busines logic of every feaure is placed  into  quicklux/quicklux-utils/lib/ as folder/features.
    Themes designed for all futures websites are placed into quicklux/themes folder.

    Functional composition is used to compose more complex behaviour for:
    -  autorizarion and authentication - verifyPermissions in utils
    -  FoodBuilder - the loading,error and data cases during its declaration.
    Iversion of control using context for FoodBuilder.

    Encapsulating all request flows and giving declarative api using useDelaiedApi.
    StateMachine-like pattern to ensure declarative approach in data flow.
    
    NX is used here only as boilerplate generator.

