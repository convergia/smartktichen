angular.module("Map").constant("locksConstants", {
  sources : {
    "simulator": {
      "label": "Carvoyant",
      "icon": { "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAnCAMAAADErLP2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NTQ1NjMyN0JFMTExRTY4QzAwOTg4NTcyRUM1N0Q5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0NTQ1NjMzN0JFMTExRTY4QzAwOTg4NTcyRUM1N0Q5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTQ1NDU2MzA3QkUxMTFFNjhDMDA5ODg1NzJFQzU3RDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ1NDU2MzE3QkUxMTFFNjhDMDA5ODg1NzJFQzU3RDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/jXu2AAAAY1BMVEUAAADzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFfzWFf0YmL1bWz1d3f2goH3jIz4l5b4oaH5rKv6trb7wMD7y8v81dX94OD+6ur+9fX///+ZYcZpAAAAEHRSTlMAECAwQFBgcICPn6+/z9/vIxqCigAAAUxJREFUOMt1k9GWgjAMRKesiKhrLy4WF7uY///KfZAWizpPtLdJhpxESqr3JwBO+1oruZ1nkd+5Z7g5Ueq0WeAWgDBOZjaNAYBtAcNkSVN4wjXQ3exZtw6oJcl56P6s1F8H3klqgWhrRaCVHBDmq6GjG+bvADg1wD1d9Nc+Pb0DjY45dOJiZhemHHyUhzGVupnZLZkYwSt7GnKjhuxLwONtn2n/uJjp/S29zzRmeo6XTCOgA/xmGmzM9BeO2qZTD/CzZO6hkfNz6lXdCFTSfj6uaA8HSRVwNbMpJk1mdgU2krQntytrBI6SpMrn/iQNpFBpB3BewsczOVRyj4nswhhjHEP38FblgeVV7TKyhxfon+bd+TUttqVewUO5SG2Zt1qtWbFJzXoLvz7nlaTmrd/X36rfQLnvlz4UpT3Atz5oC/ivT1Tth6LJWVn0Hz8HQfJQk2VKAAAAAElFTkSuQmCC"
              }
    }
  },
  infoWindows: {
    'icons': {
		"makemodel": "<svg version=\"1.0\" id=\"Layer_1\" xmlns:x=\"&amp;ns_extend;\" xmlns:i=\"&amp;ns_ai;\" xmlns:graph=\"&amp;ns_graphs;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"230.059 24.576 559.787 559.786\" enable-background=\"new 230.059 24.576 559.787 559.786\" xml:space=\"preserve\"><g><path d=\"M509.952,584.362c-154.283,0-279.894-125.61-279.894-279.893S355.669,24.576,509.952,24.576 c154.282,0,279.894,125.61,279.894,279.893S664.234,584.362,509.952,584.362z M509.952,58.709 c-135.168,0-245.76,109.909-245.76,245.76c0,135.851,109.91,245.76,245.76,245.76c135.168,0,245.76-109.909,245.76-245.76     C755.712,168.619,645.12,58.709,509.952,58.709z\"></path><path d=\"M509.952,518.144c-118.102,0-213.675-95.573-213.675-213.674S391.851,90.795,509.952,90.795 s213.675,95.573,213.675,213.674S628.054,518.144,509.952,518.144z M509.952,104.448c-110.592,0-200.021,90.112-200.021,200.021 c0,110.592,90.112,200.021,200.021,200.021s200.021-89.429,200.021-200.021C709.974,193.877,620.544,104.448,509.952,104.448z\"></path> <path d=\"M707.926,262.144c-114.688-61.44-215.723-58.709-280.576-45.056c-70.315,14.336-114.006,44.374-114.688,44.374 l-7.509-10.923c2.048-1.365,182.955-122.197,409.6-0.683L707.926,262.144z\"></path> <path d=\"M466.262,512.683l-13.653-2.73c0-0.683,12.288-60.075-23.894-111.957c-36.182-51.2-118.102-38.912-118.784-38.912 l-2.048-13.653c3.413-0.683,90.795-13.653,132.438,44.373C479.915,447.146,466.944,509.952,466.262,512.683z\"></path> <path d=\"M552.277,512.683c-0.683-2.73-13.653-65.536,26.624-122.88c40.96-58.026,128.342-45.056,132.438-44.373l-2.048,13.653 c-0.683,0-82.603-12.288-118.784,38.912c-36.864,51.882-24.576,111.274-23.894,111.957L552.277,512.683z\"></path> <path d=\"M509.952,343.381c-21.163,0-38.912-17.749-38.912-38.912s17.749-38.912,38.912-38.912c21.845,0,38.912,17.75,38.912,38.912  C548.864,326.314,531.797,343.381,509.952,343.381z M509.952,279.211c-13.653,0-25.259,11.605-25.259,25.258 c0,13.654,11.605,25.259,25.259,25.259s25.259-11.605,25.259-25.259C535.211,290.816,523.605,279.211,509.952,279.211z\"></path></g></svg>",
		"vehicle": "<svg version=\"1.0\" id=\"Layer_1\" xmlns:x=\"&amp;ns_extend;\" xmlns:i=\"&amp;ns_ai;\" xmlns:graph=\"&amp;ns_graphs;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"230.059 24.576 559.787 559.786\" enable-background=\"new 230.059 24.576 559.787 559.786\" xml:space=\"preserve\"><g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M625.616,251.023c20.458,0.437,43.363-5.104,41.814,17.423 c-4.855,4.437-12.256,6.327-18.816,9.06c5.13,7.631,12.219,14.524,13.241,28.573c0.987,13.565,0,31.132,0,48.087 c0,16.731,1.533,33.756-2.091,45.298c-7.808,2.373-19.039,1.395-29.27,1.395c-10.604,0-21.419,1.523-28.573-2.092 c-2.754-4.447-0.816-13.586-1.395-20.209c-56.682-1.626-116.382-0.232-174.226-0.697c-0.353,6.849,0.775,15.179-0.697,20.906 c-7.161,3.502-18.561,2.092-29.27,2.092c-10.708,0-22.167,1.521-29.27-2.092c-2.487-12.637-1.394-30.734-1.394-48.782 c0-20.602-3.056-44.852,2.091-57.146c2.753-6.577,8.23-9.95,11.15-14.635c-6.401-3.123-13.338-5.711-19.513-9.06 c1.35-4.787,1.789-14,6.272-16.726c7.573-4.602,24.251,1.866,34.845-1.394c5.158-1.587,11.588-12.575,16.726-18.816 c4.001-4.861,11.454-16.126,17.422-18.119c7.658-2.557,20.857-1.655,32.058-2.091c28.394-1.104,50.708-2.154,81.538-0.697 c14.225,0.673,33.921-0.429,43.905,2.788c7.047,2.27,12.585,12.243,17.423,18.119C615.022,238.81,620.268,244.906,625.616,251.023z M605.406,249.63c-4.532-5.447-13.2-19.089-20.21-21.604c-9.556-3.428-29.47-2.386-43.905-2.788 c-16.129-0.449-34.088-2.127-45.996-0.697c-12.607,1.515-44.59-0.625-54.358,3.485c-3.293,1.385-6.953,7.034-9.757,10.454 c-9.431,11.501-20.391,23.048-26.482,34.148c70.46-3.722,146.808-3.359,217.435,0C619.405,265.701,612.702,258.396,605.406,249.63z M413.757,299.807c-4.853-0.553-23.592-5.057-27.876-3.484c-4.65,1.707-4.79,12.352-2.788,17.422 c4.896,12.4,41.048,6.499,55.752,7.666C444.754,300.943,428.907,301.533,413.757,299.807z M636.767,297.02 c-20.622,3.465-57.954-2.027-48.783,24.392c21.761-1.485,65.424,9.222,55.753-23.695 C641.381,295.547,638.643,296.704,636.767,297.02z\"></path></g><g><path d=\"M764.271,75.801c-4.202-2.034-9.143-1.745-13.074,0.755c-27.378,17.48-58.921,26.714-91.238,26.714 c-53.754,0-103.238-24.963-135.758-68.481c-2.531-3.392-6.52-5.389-10.746-5.389s-8.215,1.997-10.752,5.389 c-32.521,43.512-82.004,68.481-135.758,68.481c-32.324,0-63.867-9.234-91.232-26.714c-3.932-2.5-8.872-2.795-13.08-0.755 c-4.203,2.034-7.035,6.101-7.496,10.74c-20.121,201.965,49.606,325.706,111.654,393.94C434.282,554.72,505.977,580.538,509,581.601 c1.443,0.51,2.949,0.762,4.454,0.762s3.011-0.252,4.461-0.762c3.017-1.063,74.711-26.881,142.209-101.119 c62.042-68.234,131.77-191.975,111.643-393.94C771.306,81.902,768.474,77.835,764.271,75.801z M641.157,461.437 c-53.698,59.467-111.483,86.328-127.722,93.08c-16.128-6.672-73.132-33.078-126.788-92.092 c-79.914-87.89-116.563-209.474-106.543-352.617c26.973,13.333,56.611,20.306,86.846,20.306c56.63,0,109.148-23.87,146.51-66.048 c37.362,42.179,89.875,66.048,146.51,66.048c30.235,0,59.88-6.979,86.864-20.313C757.125,254.106,721.619,372.329,641.157,461.437z\"></path></g></svg>",
		"mileage": "<svg version=\"1.0\" id=\"Layer_1\" xmlns:x=\"&amp;ns_extend;\" xmlns:i=\"&amp;ns_ai;\" xmlns:graph=\"&amp;ns_graphs;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"230.059 24.576 559.787 559.786\" enable-background=\"new 230.059 24.576 559.787 559.786\" xml:space=\"preserve\"><g><path d=\"M440.579,284.367l137.408,114.029c4.7,4.369,8.89,9.203,12.501,14.398c38.206,54.956-41.096,118.61-86.492,69.424 c-4.285-4.647-8.1-9.78-11.348-15.315l-81.614-158.819C399.877,289.062,424.421,269.356,440.579,284.367 M768.832,367.668v0.21 c-0.013,11.424-9.503,20.59-20.928,20.59h-61.322c-11.687,0-21.169-9.451-21.208-21.131l-0.006-0.612 c-0.038-11.775,9.495-21.348,21.277-21.348h36.453c-4.406-42.675-21.354-81.67-47.051-113.283l-24.582,24.583 c-8.579,8.578-22.621,8.578-31.2,0l-0.317-0.319c-8.58-8.578-8.58-22.621,0-31.2l24.582-24.583 c-31.614-25.704-70.609-42.644-113.284-47.057v35.836c0,12.119-9.828,21.939-21.946,21.939h-0.625 c-12.157,0-22.009-9.852-22.009-22.009v-35.767c-42.676,4.413-81.671,21.354-113.284,47.057l24.583,24.583 c8.578,8.579,8.578,22.622,0,31.2l-0.682,0.682c-8.381,8.381-22.092,8.381-30.474,0l-24.952-24.945 c-25.697,31.613-42.644,70.608-47.052,113.283h36.531c11.738,0,21.245,9.54,21.208,21.284l-0.007,0.606 c-0.038,11.719-9.553,21.201-21.271,21.201h-61.26c-11.431,0-20.92-9.166-20.934-20.59v-0.21 c0-143.299,116.583-259.882,259.883-259.882S768.832,224.369,768.832,367.668\"></path></g></svg>",
      "time": "<svg version=\"1.0\" id=\"Layer_1\" xmlns:x=\"&amp;ns_extend;\" xmlns:i=\"&amp;ns_ai;\" xmlns:graph=\"&amp;ns_graphs;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"230.059 24.576 559.787 559.786\" enable-background=\"new 230.059 24.576 559.787 559.786\" xml:space=\"preserve\"><g transform=\"translate(0,-952.36217)\"><path d=\"M510.63,983.616c-150.791,0-273.216,122.425-273.216,273.216s122.425,273.216,273.216,273.216 s273.216-122.425,273.216-273.216S661.421,983.616,510.63,983.616z M496.998,1008.384c-0.407,2.368-0.769,4.877-0.769,7.488 c0,14.109,6.464,25.536,14.4,25.536s14.4-11.427,14.4-25.536c0-2.611-0.361-5.12-0.769-7.488 c37.155,1.993,72.059,12.1,103.104,28.608c-2.89,3.145-5.873,7.303-8.641,12.096c-7.054,12.218-9.578,23.907-5.76,26.112 s12.529-5.83,19.584-18.048c2.78-4.815,4.867-9.544,6.145-13.632c33.18,19.948,61.253,47.418,81.983,80.064 c-3.232,1.25-6.625,2.942-10.176,4.992c-12.219,7.055-20.253,15.958-18.048,19.776c2.204,3.818,13.701,1.103,25.92-5.952 c3.625-2.093,6.866-4.309,9.6-6.528c17.869,32.093,29.021,68.469,31.104,107.328c-2.423-0.43-5.001-0.768-7.681-0.768 c-14.108,0-25.535,6.464-25.535,14.4c0,7.936,11.427,14.399,25.535,14.399c2.68,0,5.258-0.338,7.681-0.768 c-2.001,37.311-12.365,72.346-28.992,103.488c-2.867-2.4-6.245-4.835-10.176-7.104c-12.219-7.055-23.907-9.77-26.112-5.951 c-2.204,3.818,5.83,12.529,18.048,19.584c4.002,2.31,7.958,4.089,11.521,5.376c-20.015,32.963-47.48,60.84-80.064,81.408  c-1.29-3.623-3.207-7.624-5.568-11.712c-7.054-12.219-15.766-20.253-19.584-18.048c-3.817,2.203-1.102,13.894,5.952,26.111 c2.405,4.165,4.952,7.795,7.488,10.752c-32.084,17.863-68.478,28.829-107.328,30.912c0.375-2.282,0.769-4.602,0.769-7.104 c0-14.107-6.464-25.536-14.4-25.536s-14.4,11.428-14.4,25.536c0,2.502,0.394,4.822,0.769,7.104 c-39.094-2.097-75.675-13.234-107.904-31.296c2.536-2.957,5.083-6.587,7.488-10.752c7.054-12.218,9.771-23.715,5.952-25.92 c-3.818-2.204-12.53,5.83-19.584,18.048c-2.359,4.086-4.086,8.091-5.377,11.712c-32.546-20.622-59.912-48.599-79.871-81.6 c3.454-1.278,7.285-2.961,11.136-5.185c12.218-7.054,20.253-15.766,18.048-19.584c-2.204-3.818-13.894-1.294-26.111,5.761 c-3.818,2.204-7.164,4.578-9.984,6.911c-16.381-30.885-26.571-65.601-28.608-102.527c1.547,0.166,3.167,0.381,4.8,0.381 c14.109,0,25.344-6.464,25.344-14.399c0-7.937-11.234-14.401-25.344-14.401c-1.633,0-3.253,0.222-4.8,0.381 c2.122-38.47,13.108-74.528,30.72-106.368c2.674,2.143,5.91,4.316,9.408,6.336c12.219,7.055,23.716,9.578,25.92,5.76 c2.205-3.818-5.829-12.53-18.048-19.584c-3.467-2.002-6.815-3.56-9.983-4.8c20.643-32.708,48.67-60.218,81.791-80.256 c1.282,4.051,3.4,8.688,6.145,13.44c7.055,12.219,15.766,20.252,19.584,18.048s1.295-13.701-5.76-25.92 c-2.767-4.792-5.751-8.951-8.641-12.096c31.197-16.699,66.283-26.986,103.681-28.992V1008.384z M446.31,1117.439l40.513,130.752 c-0.971,2.695-1.729,5.612-1.729,8.641c0,14.065,11.472,25.536,25.536,25.536c12.829,0,23.385-9.549,25.152-21.889l153.983-82.176 l-165.695,57.024c-3.605-2.259-7.771-3.635-12.288-3.84L446.31,1117.439z\"></path></g></svg>",
		"avgSpeed": "<svg version=\"1.0\" id=\"Layer_1\" xmlns:x=\"&amp;ns_extend;\" xmlns:i=\"&amp;ns_ai;\" xmlns:graph=\"&amp;ns_graphs;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"230.059 24.576 559.787 559.786\" enable-background=\"new 230.059 24.576 559.787 559.786\" xml:space=\"preserve\"><g><path d=\"M440.579,284.367l137.408,114.029c4.7,4.369,8.89,9.203,12.501,14.398c38.206,54.956-41.096,118.61-86.492,69.424 c-4.285-4.647-8.1-9.78-11.348-15.315l-81.614-158.819C399.877,289.062,424.421,269.356,440.579,284.367 M768.832,367.668v0.21 c-0.013,11.424-9.503,20.59-20.928,20.59h-61.322c-11.687,0-21.169-9.451-21.208-21.131l-0.006-0.612 c-0.038-11.775,9.495-21.348,21.277-21.348h36.453c-4.406-42.675-21.354-81.67-47.051-113.283l-24.582,24.583 c-8.579,8.578-22.621,8.578-31.2,0l-0.317-0.319c-8.58-8.578-8.58-22.621,0-31.2l24.582-24.583 c-31.614-25.704-70.609-42.644-113.284-47.057v35.836c0,12.119-9.828,21.939-21.946,21.939h-0.625 c-12.157,0-22.009-9.852-22.009-22.009v-35.767c-42.676,4.413-81.671,21.354-113.284,47.057l24.583,24.583 c8.578,8.579,8.578,22.622,0,31.2l-0.682,0.682c-8.381,8.381-22.092,8.381-30.474,0l-24.952-24.945 c-25.697,31.613-42.644,70.608-47.052,113.283h36.531c11.738,0,21.245,9.54,21.208,21.284l-0.007,0.606 c-0.038,11.719-9.553,21.201-21.271,21.201h-61.26c-11.431,0-20.92-9.166-20.934-20.59v-0.21 c0-143.299,116.583-259.882,259.883-259.882S768.832,224.369,768.832,367.668\"></path></g></svg>",
		"telecom": "<svg version=\"1.0\" id=\"Layer_1\" xmlns:x=\"&ns_extend;\" xmlns:i=\"&ns_ai;\" xmlns:graph=\"&ns_graphs;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"391.567 121.685 249.126 373.765\" enable-background=\"new 391.567 121.685 249.126 373.765\" xml:space=\"preserve\">  <g transform=\"translate(0,-952.36218)\"> <path d=\"M432.18,1074.086c-3.2,0.262-6.175,1.75-8.304,4.152c-19.946,22.006-32.31,51.046-32.31,83.172s12.363,61.036,32.31,83.042  c4.406,5.284,12.26,5.996,17.545,1.59c5.285-4.406,5.996-12.261,1.59-17.546c-0.227-0.271-0.463-0.532-0.711-0.782  c-16.121-17.787-25.82-40.504-25.82-66.304c0-25.8,9.699-48.646,25.82-66.433c4.679-5.045,4.382-12.927-0.661-17.606 C439.084,1075.001,435.653,1073.809,432.18,1074.086z M598.394,1074.086c-6.869,0.396-12.115,6.285-11.72,13.153 c0.165,2.882,1.327,5.617,3.285,7.737c16.122,17.787,25.821,40.633,25.821,66.433c0,25.8-9.699,48.517-25.821,66.304 c-4.837,4.891-4.793,12.779,0.098,17.617c4.892,4.838,12.779,4.795,17.616-0.097c0.249-0.251,0.485-0.512,0.712-0.782 c19.944-22.006,32.309-50.917,32.309-83.042s-12.364-61.166-32.309-83.172C605.86,1075.405,602.183,1073.876,598.394,1074.086z M469.939,1094.847c-2.771,0.129-5.421,1.179-7.526,2.984c-17.988,15.253-29.325,38.28-29.325,63.579 c0,25.298,11.337,48.196,29.325,63.449c5.266,4.445,13.137,3.778,17.581-1.488c4.444-5.267,3.778-13.139-1.489-17.583 c0,0-0.001-0.002-0.003-0.003c-12.553-10.645-20.501-26.495-20.501-44.375s7.948-33.86,20.501-44.505 c5.311-4.373,6.072-12.224,1.699-17.536C477.691,1096.32,473.882,1094.641,469.939,1094.847z M560.636,1094.847 c-6.858,0.558-11.964,6.57-11.405,13.428c0.274,3.372,1.91,6.487,4.528,8.63c12.553,10.646,20.501,26.625,20.501,44.505 s-7.948,33.73-20.501,44.375c-5.269,4.442-5.938,12.314-1.496,17.582c4.442,5.268,12.313,5.938,17.581,1.496 c0.002-0.001,0.003-0.002,0.004-0.003c17.988-15.253,29.324-38.151,29.324-63.449c0-25.298-11.336-48.326-29.324-63.579  C567.306,1095.635,563.983,1094.558,560.636,1094.847z M516.13,1119.889c-22.784,0-41.521,18.737-41.521,41.521 c0,22.784,18.737,41.521,41.521,41.521c22.783,0,41.521-18.737,41.521-41.521C557.65,1138.626,538.913,1119.889,516.13,1119.889z M516.13,1144.802c9.32,0,16.608,7.289,16.608,16.608s-7.288,16.608-16.608,16.608c-9.32,0-16.609-7.288-16.609-16.608 S506.81,1144.802,516.13,1144.802z M515.612,1215.387c-4.747,0.186-8.974,3.055-10.901,7.396l-91.346,207.604  c-2.743,6.31,0.151,13.649,6.459,16.391c3.969,1.726,8.548,1.267,12.096-1.21l84.209-59.426l84.211,59.426  c5.642,3.938,13.407,2.556,17.345-3.086c2.477-3.548,2.934-8.126,1.209-12.095l-91.346-207.604c-1.926-4.341-6.153-7.21-10.9-7.396 c-0.172-0.003-0.346-0.003-0.519,0C515.957,1215.384,515.783,1215.384,515.612,1215.387z M516.13,1258.724l32.569,73.959  l-32.569,22.966l-32.568-22.966L516.13,1258.724z M473.311,1355.909l21.28,15.052l-40.353,28.416L473.311,1355.909z M558.949,1355.909l19.073,43.468l-40.354-28.416L558.949,1355.909z\"/></g></svg>"
    }
  }
})