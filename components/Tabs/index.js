// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function Tab(topic) {

    // add element
    const tabTopic = document.createElement('div');


    // add class
    tabTopic.classList.add('tab');


    // add attribute
    tabTopic.textContent = topic;


    return tabTopic;
}

const topics = document.querySelector('.topics');

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        response.data.topics.forEach(item => {
            const eachTopic = Tab(item)
            topics.appendChild(eachTopic);
        })
    })
    .catch(err => {
        console.log(err);
    })