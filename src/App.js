import React from 'react';
import utils from './utils/utils';
import privateData from './../privateData';
import NavigationBar from './components/NavigationBar';
import Schedules from './components/Schedules';
import IngredientsSearch from './components/IngredientsSearch';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      load: false,
      // activeTab: 'Ingredient Search',
      activeTab: 'Schedules',
      ingredientList: [],
      plans: [
        {
          name: 'Test week name',
          weekPlan: [
            {
              day: 'Monday',
              meals: [
                {
                  name: 'Test meal :)',
                  dishes: []
                }
              ],
            },
            {
              day: 'Tuesday',
              meals: [],
            },
            {
              day: 'Wednesday',
              meals: [],
            },
            {
              day: 'Thursday',
              meals: [],
            },
            {
              day: 'Friday',
              meals: [],
            },
            {
              day: 'Saturday',
              meals: [],
            },
            {
              day: 'Sunday',
              meals: [],
            },

          ]
        }
      ],
      kplans: [
        {
          name: "Week plan 1",
          weekPlan: [
            {
              day: 'Monday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Tuesday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Wednesday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Thursday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Friday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Saturday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Sunday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },{
          name: "Week plan 2",
          weekPlan: [
            {
              day: 'Monday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calor: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    // {
                    //   name: 'Basic salad feta 2',
                    //   recipe: [
                    //     {name: "ingredient 1", calories: "loads"},
                    //     {name: "ingredient 2", calories: "less"},
                    //     {name: "feta cheese", calories: "a bit"},
                    //   ]
                    // }
                  ]
                }
              ]
            },
            {
              day: 'Tuesday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Wednesday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Thursday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Friday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Saturday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            },
            {
              day: 'Sunday',
              meals: [
                {
                  name: 'Meal 1',
                  dishes: [
                    {
                      name: 'Basic salad',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                },
                {
                  name: 'Meal 2',
                  dishes: [
                    {
                      name: 'Basic salad 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                      ]
                    },
                    {
                      name: 'Basic salad feta 2',
                      recipe: [
                        {name: "ingredient 1", calories: "loads"},
                        {name: "ingredient 2", calories: "less"},
                        {name: "feta cheese", calories: "a bit"},
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }

    this.addIngredientsToMyCollection = this.addIngredientsToMyCollection.bind(this);
    this.addWeek = this.addWeek.bind(this);
    this.addMeal = this.addMeal.bind(this);
    this.addDish = this.addDish.bind(this);
    this.changeActiveTab = this.changeActiveTab.bind(this);
    this.save = this.save.bind(this);

    this.loadConfig();
    
  }
  
  // Add an empty week to the state
  addWeek(newWeekName){
    const prevPlans = this.state.plans;
    if (Array.isArray(prevPlans) && prevPlans.length > 0) {
      alert('careful! this.state.plans it\'s an array and contains something in it!');
    } else {
      this.setState({
        plans: [
          {
            name: newWeekName ? newWeekName : 'Untitled week',
            weekPlan: [
              {
                day: 'Monday',
                meals: [],
              },
              {
                day: 'Tuesday',
                meals: [],
              },
              {
                day: 'Wednesday',
                meals: [],
              },
              {
                day: 'Thursday',
                meals: [],
              },
              {
                day: 'Friday',
                meals: [],
              },
              {
                day: 'Saturday',
                meals: [],
              },
              {
                day: 'Sunday',
                meals: [],
              },

            ]
          }
        ]
      });
    }
  }

  // Add a meal to a specific day and meal
  addMeal(weekName, dayName, newMealObject){
    // Get previous state
    const prevState = this.state.plans;

    // Duplicate state and inject meal
    const newState = prevState.map(weekObject => {
      if (weekObject.name === weekName) {
        return({ // If it's the same week, return a week object:
          name: weekName,
          weekPlan: weekObject.weekPlan.map(dayObject => {
            if (dayObject.day === dayName) {
              // If it's the same day, add meal to current meal array
              let newMealArray = dayObject.meals;
              newMealArray.push(newMealObject);
              // and return the updated day object
              return { day: dayName, meals: newMealArray } 
            } else {
              return dayObject;
            }
          })
        });
      } else {
        return weekObject;
      }
    });

    // Update state
    this.setState({ plans: newState });

    // don't worry about existing meals,
    // you will handle this cases with,
    // updateMeal() or similar
  }

  // Add a dish to a specific meal
  addDish(weekName, dayName, mealName, newDishObject){
    console.log('------------------------------------ addDish()');
    console.log('<App/>.addDish << weekName:', weekName);
    console.log('<App/>.addDish << dayName:', dayName);
    console.log('<App/>.addDish << mealName:', mealName);
    console.log('<App/>.addDish << newDishObject:', newDishObject);

    // Get previous state
    const prevState = this.state.plans;

        alert('new dish injection not finished!')

  }

  // Change the active tab shown on screen
  changeActiveTab(navigationBarItem){
    this.setState({activeTab: navigationBarItem})
  }

  // Add ingredients to my collection
  addIngredientsToMyCollection(ingredientList){
    
    // Get existing ingredient list
    let oldIngredientList = this.state.ingredientList;
    let newIngredientList = oldIngredientList;

    // Run through all the ingredients passed
    ingredientList.forEach((ingredient)=>{
      // If the ingredient is not in the list, add it
      if (oldIngredientList.indexOf(ingredient) === -1) {
        newIngredientList.push(ingredient);
      }
    });

    // Update state
    this.setState({ingredientList: newIngredientList});
  }

  // Load config settings
  loadConfig(){
    // Look for settings file
    utils.readFile('./nutrition-config.json', (configData)=>{
      const config = JSON.parse(configData);
      this.setState({ config: config });
    });
  }

  // Save
  save(filePath){
    let content = {
      state: this.state
    };  
    utils.writeFile(filePath,JSON.stringify(content));
  }

  // Load
  load(filePath){
    let readData;
    const handleReadData = (data) => {
      readData = JSON.parse(data);
    
      this.setState(readData.state);
      this.setState({load: false});
    }
    utils.readFile(filePath,handleReadData);
  }

  render() {
    // If config loaded and autosave=true, set autosave
    if (this.state.config && this.state.config.autosave === true) {
      setInterval(()=>{this.save('./autosave.json')}, 1*1000);
    }

    // If config loaded and loadAutoSaveOnStart=true, load state
    if (this.state.config && this.state.config.loadAutoSaveOnStart === true && this.state.load === true) {
      this.load('autosave.json');
    }

    // console.log('App > this.state:', this.state);
    // console.log('App > this.state.plans[0].weekPlan[0].meals:', this.state.plans[0].weekPlan[0].meals);
    return (
      <div className="App">
        <NavigationBar activeTab={this.state.activeTab} changeActiveTab={this.changeActiveTab} />
        {
          this.state.activeTab === 'Ingredient Search' ?
          <IngredientsSearch
            getIngredientNdbno={utils.getIngredientNdbno}
            privateData={privateData}
            addIngredientsToMyCollection={this.addIngredientsToMyCollection}
          /> : null
        }
        {
          this.state.activeTab === 'Schedules' ?
          <Schedules
            ingredientList={this.state.ingredientList}
            plans={this.state.plans}
            addWeek={this.addWeek}
            addMeal={this.addMeal}
            addDish={this.addDish}
          /> : null
        }
      </div>
    );
  }
}

module.exports = App;
