/*
 * grunt-angular-templates
 * https://github.com/ericclemmons/grunt-angular-templates
 *
 * Copyright (c) 2013 Eric Clemmons
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	
	// define the build project path
    var projectPath = '/Users/marvettefeghali/git/UIComponents/UIComponents'; 
    
    var files = {};
    
    var dashboardBuilder_resources_path = projectPath + 'lib/UIComponents/build/ide/js/dashboardBuilder_resources.min.js';
    var template_resources_path = projectPath + 'lib/UIComponents/build/ide/js/template_resources.min.js';
    
    files[dashboardBuilder_resources_path] = 'build/javascript/dashboardBuilder_resources.js' ;
    files[template_resources_path] =  'build/javascript/template_resources.js';

	grunt
	      .initConfig({

	         // Basic settings and info about our plugins
	         pkg : grunt.file.readJSON('package.json'),

	         fetchFromCDN : {
	            options : {},
	            projJsFiles : {
	               dest : 'lib',

	               fetchUrls : [
	                      // CSS      
	                     'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css',
	                     'https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css',
	                     'https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.3/angular-material.min.css',
	                     'https://cdnjs.cloudflare.com/ajax/libs/angular-xeditable/0.7.0/css/xeditable.min.css',
	                     'https://cdnjs.cloudflare.com/ajax/libs/angular-bootstrap-colorpicker/3.0.31/css/colorpicker.min.css',
	                     'https://cdnjs.cloudflare.com/ajax/libs/angularjs-slider/6.2.2/rzslider.css',
	                     'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.27.4/codemirror.min.css',
	                     'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.27.4/theme/neo.min.css',
                          // JS
                          'https://cdn.plot.ly/plotly-latest.min.js',
                          'https://cdnjs.cloudflare.com/ajax/libs/justgage/1.2.2/justgage.min.js',
                         'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.21/moment-timezone-with-data.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
	                     'https://code.jquery.com/ui/1.12.0/jquery-ui.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js',
	                     'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min.js',
	                     'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js',
	                     'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.min.js',
	                     'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-cookies.min.js',
	                     'https://cdn.rawgit.com/gdi2290/angular-websocket/v1.0.9/angular-websocket.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/angular-slick-carousel/3.1.7/angular-slick.min.js',
	                     'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-animate.min.js',
	                     'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-sanitize.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js',
	                     'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js',
	                     'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js',
	                     'https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.3/angular-material.min.js',
	                     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-114/svg-assets-cache.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js',
	                     'https://d3js.org/d3.v4.min.js',
	                     'https://rawgit.com/allenhwkim/angularjs-google-maps/master/build/scripts/ng-map.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/angular-xeditable/0.7.0/js/xeditable.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/angularjs-slider/6.2.2/rzslider.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.27.4/codemirror.min.js',
	                     'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.27.4/mode/javascript/javascript.min.js'

	               ]
	            }
	         },

	         fetch_ag_grid : {
		         all : {
		            src : [
		                  'https://cdnjs.cloudflare.com/ajax/libs/ag-grid/12.0.0/ag-grid.js?ignore=notused36'],
		            dest : 'lib/ag_grid.js'
		         }

	         },

	         ngtemplates : {
		         app : {
		            src : [
                          'dashboard/frontend/components/ACL/ACL.html',
                          'dashboard/frontend/components/dygraphs/dygraphs.html',
		                  'dashboard/frontend/components/ACL/myModalContent.html',
		                  'dashboard/frontend/components/chart/chart.html',
		                  'dashboard/frontend/components/gauge/gauge.html',
		                  'dashboard/frontend/components/grid/grid.html',
		                  'dashboard/frontend/components/grid/popup.html',
		                  'dashboard/frontend/components/list/autocomplete.html',
		                  'dashboard/frontend/components/map/map.html',
		                  'dashboard/frontend/components/progressBar/progressBar.html',
		                  'dashboard/frontend/components/thermometer/thermometer.html',
		                  'dashboard/frontend/components/thermometer/tg_thermometer_vertical.html',
		                  'dashboard/frontend/components/odometer/odometer.html',
		                  'dashboard/frontend/components/searchBox/searchBox.html',
		                  'dashboard/frontend/components/speedometer/speedometer.html',
		                  'dashboard/frontend/components/message/message.html',
                          'dashboard/frontend/components/accelerometer/accelerometer.html',
		                  'dashboard/frontend/components/button/button.html',
		                  'dashboard/frontend/components/slider/slider.html',
		                  'dashboard/frontend/components/IFrame/IFrame.html',
						  'dashboard/frontend/components/toggleSwitch/toggle_switch.html',
                          'dashboard/frontend/components/plotly/3dsurface.html',                          
						  'dashboard/frontend/components/plotly/windrose.html',
						  'dashboard/frontend/components/metricBox/metricBox.html',
		                  'dashboardBuilder/javascript/UIComponents/Components/box.html',
		                  'dashboardBuilder/javascript/UIComponents/Components/dashboard.html',
		                  'dashboardBuilder/javascript/UIComponents/Components/dashboardsList.html',
		                  'dashboardBuilder/javascript/UIComponents/Components/deletePopup.html',
		                  'dashboardBuilder/javascript/UIComponents/Components/confirmation.html',
		                  'dashboardBuilder/javascript/UIComponents/Components/myModalContent.html',
		                  'dashboardBuilder/view/dashboard.html',
		                  'dashboardBuilder/view/dashboardTemplate.min',
		                  'dashboardBuilder/ide/dashboardTemplate_ide.min',
		                  'dashboardBuilder/view/dashboardsList.html' ],
		            dest : 'build/js/templates.js',
		            options : {
		               bootstrap : function(module, script) {
			               return 'var cachedTemplates = (["$templateCache", function($templateCache) {'
			                     + script + '}])';
		               },
		               htmlmin : {
		                  collapseBooleanAttributes : true,
		                  collapseWhitespace : true,
		                  removeAttributeQuotes : true,
		                  removeComments : true, // Only if you don't use comment directives!
		                  removeEmptyAttributes : true,
		                  removeRedundantAttributes : true,
		                  removeScriptTypeAttributes : true,
		                  removeStyleLinkTypeAttributes : true
		               },
		               url : function(url) {
			               return url.replace('dashboard/',
			                     '/UIComponents/dashboard/').replace(
			                     'dashboardBuilder/',
			                     '/UIComponents/dashboardBuilder/');
		               }
		            }
		         }
	         },

	         ngAnnotate : {
	            options : {
		            singleQuotes : true
	            },
	            app : {
		            files : {
                        'concat/min-safe/angular_dygraphs.js' : [ 'dashboard/frontend/components/dygraphs/angular-dygraphs.js' ],
                        'concat/min-safe/dygraphs.js' : [ 'dashboard/frontend/components/dygraphs/dygraphs.js' ],
						'concat/min-safe/angular_plotly.js' : [ 'dashboard/frontend/components/plotly/angular-plotly.js' ],
                        'concat/min-safe/plotly.js' : [ 'dashboard/frontend/components/plotly/plotly.js' ],
                        'concat/min-safe/3dsurface.js' : [ 'dashboard/frontend/components/plotly/3dsurface.js' ],
                        'concat/min-safe/windrose.js' : [ 'dashboard/frontend/components/plotly/windrose.js' ],
						'concat/min-safe/metricBox.js' : [ 'dashboard/frontend/components/metricBox/metricBox.js' ],
		               'concat/min-safe/acl.js' : [ 'dashboard/frontend/components/ACL/ACL.js' ],
		               'concat/min-safe/abn_tree_directive.js' : [ 'dashboard/frontend/components/searchBox/abn_tree_directive.js' ],
		               'concat/min-safe/markerClusterer.js' : [ 'dashboard/frontend/components/map/markerClusterer.js' ],
		               'concat/min-safe/map.js' : [ 'dashboard/frontend/components/map/map.js' ],
		               'concat/min-safe/angucomplete.alt.js' : [ 'dashboard/frontend/components/list/angucomplete.alt.js' ],
		               'concat/min-safe/grid.js' : [ 'dashboard/frontend/components/grid/grid.js' ],
		               'concat/min-safe/autocomplete.js' : [ 'dashboard/frontend/components/list/autocomplete.js' ],
		               'concat/min-safe/odometer.js' : [ 'dashboard/frontend/components/odometer/odometer.js' ],
		               'concat/min-safe/speedometer.js' : [ 'dashboard/frontend/components/speedometer/speedometer.js' ],
		               'concat/min-safe/gauge.js' : [ 'dashboard/frontend/components/gauge/gauge.js' ],
		               'concat/min-safe/chart.js' : [ 'dashboard/frontend/components/chart/chart.js' ],
					   'concat/min-safe/searchBox.js' : [ 'dashboard/frontend/components/searchBox/searchBox.js' ],
					   'concat/min-safe/displayCount.js' : [ 'dashboard/frontend/components/displayCount/displayCount.js' ],
		               'concat/min-safe/httpProvider.js' : [ 'httpProvider.js' ],
					   'concat/min-safe/wsProvider.js' : [ 'wsProvider.js' ],
					   'concat/min-safe/dataService.js' : [ 'dataService.js' ],
		               'concat/min-safe/morris.js' : [ 'dashboard/frontend/components/chart/morris.js' ],
		               'concat/min-safe/angular.morris.js' : [ 'dashboard/frontend/components/chart/angular.morris.js' ],
					   'concat/min-safe/templates.js' : [ 'build/js/templates.js' ],
					   'concat/min-safe/boxStyleConfig.js' : [ 'dashboardBuilder/javascript/UIComponents/Components/library/boxStyleConfig.js' ],
					   'concat/min-safe/commonsConfig.js' : [ 'dashboardBuilder/javascript/UIComponents/Components/library/commonsConfig.js' ],
					   'concat/min-safe/dashboardConfig.js' : [ 'dashboardBuilder/javascript/UIComponents/Components/library/dashboardConfig.js' ],
					   'concat/min-safe/defaultThemeModel.js' : [ 'dashboardBuilder/javascript/UIComponents/Components/library/defaultThemeModel.js' ],
		               'concat/min-safe/widgetsConfig.js' : [ 'dashboardBuilder/javascript/UIComponents/Components/library/widgetsConfig.js' ],
		               'concat/min-safe/module.js' : [ 'dashboardBuilder/javascript/UIComponents/Components/module.js' ],
		               'concat/min-safe/dashboard.js' : [ 'dashboardBuilder/javascript/UIComponents/Components/dashboard.js' ],
		               'concat/min-safe/dashboardsList.js' : [ 'dashboardBuilder/javascript/UIComponents/Components/dashboardsList.js' ],
		               'concat/min-safe/ngScriptrAlert.js' : [ 'dashboard/frontend/components/alert/ngScriptrAlert.js' ],
		               'concat/min-safe/alert.js' : [ 'dashboard/frontend/components/alert/alert.js' ],
		               'concat/min-safe/toggle_switch.js' : [ 'dashboard/frontend/components/toggleSwitch/toggle_switch.js' ],
	            	   'concat/min-safe/slider.js' : [ 'dashboard/frontend/components/slider/slider.js' ],
		               'concat/min-safe/button.js' : [ 'dashboard/frontend/components/button/button.js' ],
                       'concat/min-safe/accelerometer.js' : [ 'dashboard/frontend/components/accelerometer/accelerometer.js' ], 
                       'concat/min-safe/IFrame.js' : [ 'dashboard/frontend/components/IFrame/IFrame.js' ], 
                       'concat/min-safe/angular-underscore.js' : [ 'dashboardBuilder/lib/schemaForm/angular-underscore.js' ],
	            	   'concat/min-safe/svg-assets-cache.js' : [ 'lib/svg-assets-cache.js' ],
	            	   'concat/min-safe/spectrum.js' : [ 'dashboardBuilder/lib/schemaForm/spectrum.js' ],
	            	   'concat/min-safe/angular-spectrum-colorpicker.min.js' : [ 'dashboardBuilder/lib/schemaForm/angular-spectrum-colorpicker.min.js' ],
	                   'concat/min-safe/tv4.js' : [ 'dashboardBuilder/lib/schemaForm/tv4.js' ],
		               'concat/min-safe/objectPath.js' : [ 'dashboardBuilder/lib/schemaForm/objectPath.js' ],
		               'concat/min-safe/schemaForm.js' : [ 'dashboardBuilder/lib/schemaForm/schemaForm.js' ],
		               'concat/min-safe/bootstrapDecorator.js' : [ 'dashboardBuilder/lib/schemaForm/bootstrapDecorator.js' ],
		               'concat/min-safe/bootstrap-colorpicker.min.js' : [ 'dashboardBuilder/lib/schemaForm/bootstrap-colorpicker.min.js' ],
		               'concat/min-safe/ui-codemirror.js' : [ 'dashboardBuilder/lib/codemirror/js/mode/ui-codemirror.js' ],
                       'concat/min-safe/thermometer_directive.js' : [ 'dashboard/frontend/components/thermometer/thermometer_directive.js' ],
		               'concat/min-safe/thermometer.js' : [ 'dashboard/frontend/components/thermometer/thermometer.js' ] 
		            }
	            }
	         },

	         concat : {

	            dashboardBuilder_ide : {
		            src : [
		                      //  JQUERY                                            
		                     'lib/jquery.min.js',
		                     'lib/jquery-ui.min.js',
		                     'lib/jquery.cookie.min.js',
		                     'lib/slick.min.js',
		                     // Libraries
		                     'lib/underscore-min.js',
		                     'lib/handlebars.min.js',
		                     'lib/codemirror.min.js',
		                     'lib/javascript.min.js',
		                     // NG material
		                     'lib/angular.min.js',
		                     'lib/angular-route.min.js',
		                     'lib/angular-websocket.min.js',
		                     'lib/angular-cookies.min.js',
		                     'lib/angular-slick.min.js',
		                     'dashboardBuilder/lib/gridster/angular_gridster.min.js',
		                     'lib/angular-animate.min.js',
		                     'lib/angular-sanitize.min.js',
		                     'concat/min-safe/angular-underscore.js',
		                     'dashboardBuilder/lib/schemaForm/angular-translate.min.js',
		                     'dashboardBuilder/lib/schemaForm/select.min.js',
		                     'lib/ui-bootstrap.min.js',
		                     'lib/ui-bootstrap-tpls.min.js',
		                     'lib/angular-messages.min.js',
		                     'lib/angular-aria.min.js',
		                     'lib/angular-material.min.js',
		                     'concat/min-safe/svg-assets-cache.js',
		                     'concat/min-safe/markerClusterer.js',
		                     
		                     // Directives
		                     'lib/raphael-min.js',
		                     'concat/min-safe/morris.js',
		                     'concat/min-safe/angular.morris.js',
		                     'dashboard/frontend/components/gauge/justgauge.js',
		                     'dashboard/frontend/components/gauge/angular.gauge.min.js',
		                     'dashboard/frontend/components/speedometer/angular.metergauge.min.js',
		                     'lib/d3.v4.min.js',
		                     'dashboard/frontend/components/odometer/odometer.min.js',
		                     'dashboard/frontend/components/odometer/angular.odometer.min.js',
		                     'concat/min-safe/abn_tree_directive.js',
		                     'concat/min-safe/thermometer_directive.js',
		                     'lib/ng-map.min.js',
		                     'lib/ag_grid.js',
		                     'concat/min-safe/angucomplete.alt.js',
		                     'dashboard/frontend/components/toggleSwitch/angular_toggle_switch.js',
		                     'lib/rzslider.min.js',
		                     'dashboard/frontend/components/button/angular-promise-buttons.js',
		                     'lib/xeditable.min.js',
		                     'concat/min-safe/spectrum.js',
		                     'concat/min-safe/angular-spectrum-colorpicker.min.js',
		                     'concat/min-safe/tv4.js',
		                     'concat/min-safe/objectPath.js',
		                     'concat/min-safe/ui-codemirror.js',
		                     'concat/min-safe/schemaForm.js',
		                     'concat/min-safe/bootstrapDecorator.js',
		                     'concat/min-safe/bootstrap-colorpicker.min.js',
		                     'dashboardBuilder/lib/schemaForm/bootstrap-ui-select.min.js',
		                     'dashboardBuilder/lib/schemaForm/bootstrap-ui-codemirror.min.js',
                             'dashboardBuilder/lib/schemaForm/autorefresh.js',
		                     // Components
		                     'concat/min-safe/wsProvider.js',
		                     'concat/min-safe/httpProvider.js',
		                     'concat/min-safe/templates.js',
		                     'concat/min-safe/chart.js',
		                     'concat/min-safe/odometer.js',
		                     'concat/min-safe/speedometer.js',
		                     'concat/min-safe/searchBox.js',
		                     'concat/min-safe/gauge.js',
		                     'concat/min-safe/ngScriptrAlert.js',
		                     'concat/min-safe/alert.js',
                             'concat/min-safe/accelerometer.js',
		                     'concat/min-safe/toggle_switch.js',
		                     'concat/min-safe/slider.js',
		                     'concat/min-safe/button.js',
		                     'concat/min-safe/IFrame.js',
		                     'concat/min-safe/map.js',
		                     'concat/min-safe/grid.js',
		                     'concat/min-safe/autocomplete.js',
		                     'concat/min-safe/acl.js',
		                     'concat/min-safe/module.js',
							 'concat/min-safe/widgetsConfig.js',
							 'concat/min-safe/boxStyleConfig.js',
							 'concat/min-safe/commonsConfig.js',
							 'concat/min-safe/dashboardConfig.js',
							 'concat/min-safe/defaultThemeModel.js',
		                     'concat/min-safe/dashboardsList.js',
		                     'concat/min-safe/dashboard.js',
		                     'concat/min-safe/thermometer.js',
		                     'dashboard/frontend/components/progressBar/progressBar.js' ],
		                     
		                     dest : 'build/javascript/dashboardBuilder_resources.js'
				},
				dashboard_builder_constants: {
	            	src: [
						'dashboardBuilder/javascript/components/library/widgets/line-dygraph.js',
						'dashboardBuilder/javascript/components/library/widgets/bar.js',
						'dashboardBuilder/javascript/components/library/widgets/area.js',
						'dashboardBuilder/javascript/components/library/widgets/line.js',
						'dashboardBuilder/javascript/components/library/widgets/donut.js',
						'dashboardBuilder/javascript/components/library/widgets/gauge.js',
						'dashboardBuilder/javascript/components/library/widgets/speedometer.js',
						'dashboardBuilder/javascript/components/library/widgets/thermometer.js',
						'dashboardBuilder/javascript/components/library/widgets/odometer.js',
						'dashboardBuilder/javascript/components/library/widgets/progressbar.js',
						'dashboardBuilder/javascript/components/library/widgets/map.js',
						'dashboardBuilder/javascript/components/library/widgets/accelerometer.js',
						'dashboardBuilder/javascript/components/library/widgets/grid.js',
						'dashboardBuilder/javascript/components/library/widgets/toggle-switch.js',
						'dashboardBuilder/javascript/components/library/widgets/slider.js',
						'dashboardBuilder/javascript/components/library/widgets/button.js',
						'dashboardBuilder/javascript/components/library/widgets/iframe.js',
						'dashboardBuilder/javascript/components/library/widgets/alert.js',
						'dashboardBuilder/javascript/components/library/widgets/display-data.js',
						'dashboardBuilder/javascript/components/library/widgets/metric-box.js',
						'dashboardBuilder/javascript/components/library/widgets/3dsurface.js',
						'dashboardBuilder/javascript/components/library/widgets/windrose.js'
					],
	            	dest: 'build/js/dashboard_builder_constants.min.js'
	            },
	            
	            dashboard_template : {
	            	src : [
		                //  JQUERY                                            
		               'lib/jquery.min.js',
		               'lib/jquery-ui.min.js',
		               'lib/jquery.cookie.min.js',
		               /**'lib/slick.min.js',**/
		               // Libraries
		               'lib/underscore-min.js',
		               /**'lib/handlebars.min.js',**/
		               // NG material
		               'lib/angular.min.js',
		               'lib/angular-route.min.js',
		               'lib/angular-websocket.min.js',
		               'lib/angular-cookies.min.js',
		               /**'lib/angular-slick.min.js',**/
		               'dashboardBuilder/lib/gridster/angular_gridster.min.js',
		               'lib/angular-animate.min.js',
		               'lib/angular-sanitize.min.js',
		               'concat/min-safe/angular-underscore.js',
		               /**'dashboardBuilder/lib/schemaForm/angular-translate.min.js',
		               'dashboardBuilder/lib/schemaForm/select.min.js',**/
		               'lib/ui-bootstrap.min.js',
		               'lib/ui-bootstrap-tpls.min.js',
		               'lib/angular-messages.min.js',
		               'lib/angular-aria.min.js',
		               'lib/angular-material.min.js',
		               'concat/min-safe/svg-assets-cache.js',
		               'concat/min-safe/markerClusterer.js',

		               // Directives
		               'lib/raphael-min.js',
		               'concat/min-safe/morris.js',
		               'concat/min-safe/angular.morris.js',
		               'dashboard/frontend/components/gauge/justgauge.js',
		               'dashboard/frontend/components/gauge/angular.gauge.min.js',
		               'dashboard/frontend/components/speedometer/angular.metergauge.min.js',
		               'lib/d3.v4.min.js',
		               'dashboard/frontend/components/odometer/odometer.min.js',
		               'dashboard/frontend/components/odometer/angular.odometer.min.js',
		               'concat/min-safe/abn_tree_directive.js',
		               'dashboard/frontend/components/thermometer/thermometer_directive.js',
		               'lib/ng-map.min.js',
		               'lib/ag_grid.js',
		               'concat/min-safe/angucomplete.alt.js',
		               'dashboard/frontend/components/toggleSwitch/angular_toggle_switch.js',
		               'lib/rzslider.min.js',
		               'dashboard/frontend/components/button/angular-promise-buttons.js',
		               /**
		               'lib/xeditable.min.js',
		               'concat/min-safe/spectrum.js',
		               'concat/min-safe/angular-spectrum-colorpicker.min.js',
		               'concat/min-safe/tv4.js',
		               'concat/min-safe/objectPath.js',
		               'concat/min-safe/schemaForm.js',
		               'concat/min-safe/bootstrapDecorator.js',
		               'concat/min-safe/bootstrap-colorpicker.min.js',
		               'dashboardBuilder/lib/schemaForm/bootstrap-ui-select.min.js',
		               **/
		               // Components
		               'concat/min-safe/wsProvider.js',
		               'concat/min-safe/httpProvider.js',
		               'concat/min-safe/templates.js',
		               'concat/min-safe/chart.js',
		               'concat/min-safe/odometer.js',
		               'concat/min-safe/speedometer.js',
		               'concat/min-safe/searchBox.js',
		               'concat/min-safe/gauge.js',
		               'concat/min-safe/ngScriptrAlert.js',
		               'concat/min-safe/alert.js',
		               'concat/min-safe/accelerometer.js',
		               'concat/min-safe/toggle_switch.js',
		               'concat/min-safe/slider.js',
		               'concat/min-safe/button.js',
		               'concat/min-safe/IFrame.js',
		               'concat/min-safe/map.js',
		               'concat/min-safe/grid.js',
		               'concat/min-safe/autocomplete.js',
					   'concat/min-safe/acl.js',
					   'concat/min-safe/angular_plotly.js' ,
                        'concat/min-safe/plotly.js' ,
						'concat/min-safe/3dsurface.js' ,                        
						'concat/min-safe/windrose.js' ,
						'concat/min-safe/metricBox.js' ,
		               /**
		               'concat/min-safe/module.js',
		               'concat/min-safe/widgetsConfig_ide.js',
		               'concat/min-safe/dashboardsList.js',
		               'concat/min-safe/dashboard.js',**/
		               'dashboard/frontend/components/thermometer/thermometer.js',
		               'dashboard/frontend/components/progressBar/progressBar.js' ],
		               
		               dest: 'build/javascript/template_resources.js'
	            },
	            
	            external_jquery_resources: {
	            	src: ['lib/jquery.min.js', 'lib/jquery-ui.min.js', 'lib/jquery.cookie.min.js', 'lib/slick.min.js'],
	            	dest: 'build/js/external_jquery_resources.min.js'
	            },
	            
	            external_libraries: {
					src: [ 'lib/underscore-min.js',
					'dashboard/frontend/components/dygraphs/dygraphs-2.1.0.js',
					'lib/plotly-latest.min.js', 'lib/handlebars.min.js',
					 'lib/codemirror.min.js', 'lib/javascript.min.js'],
	            	dest: 'build/js/external_libraries.min.js'
                },
                dt_external_libraries1: {
                    src: [ 
						'lib/underscore-min.js',
						'lib/codemirror.min.js',
                        'dashboard/frontend/components/dygraphs/dygraphs-2.1.0.js'
                        ],
	            	dest: 'build/js/dt_external_libraries1.min.js'
				},
				dt_external_libraries2: {
                    src: [ 
						//'lib/plotly-latest.min.js',
						'lib/moment.min.js',
                        'lib/moment-timezone-with-data.min.js',
                        'lib/javascript.min.js',
                        'lib/justgage.min.js'
                        ],
	            	dest: 'build/js/dt_external_libraries2.min.js'
				},
				
	            
	            external_angular_resources_1: {
	            	src: [ 'lib/angular.min.js', 'lib/angular-route.min.js',  'lib/angular-websocket.min.js', 'lib/angular-cookies.min.js', 'lib/angular-slick.min.js', 'dashboardBuilder/lib/gridster/angular_gridster.min.js', 'lib/angular-animate.min.js'],
	            	dest: 'build/js/angular_resources_1.min.js'
	            },
	            
	            external_angular_resources_2: {
	            	src: [ 'lib/angular-sanitize.min.js', 'concat/min-safe/angular-underscore.js', 'dashboardBuilder/lib/schemaForm/angular-translate.min.js', 'dashboardBuilder/lib/schemaForm/select.min.js', 'lib/ui-bootstrap.min.js', 'lib/ui-bootstrap-tpls.min.js', 'lib/angular-messages.min.js', 'lib/angular-aria.min.js'],
	            	dest: 'build/js/angular_resources_2.min.js'
	            },
	            
	            external_angular_resources_3: {
	            	src: [ 'lib/angular-material.min.js', 'concat/min-safe/svg-assets-cache.js', 'concat/min-safe/markerClusterer.js'],
	            	dest: 'build/js/angular_resources_3.min.js'
	            },
	            
	            directives_1: {
	            	src: [   'lib/raphael-min.js',
		                     'concat/min-safe/morris.js',
		                     'concat/min-safe/angular.morris.js',
		                     'dashboard/frontend/components/gauge/justgauge.js',
		                     'dashboard/frontend/components/gauge/angular.gauge.min.js',
		                     'dashboard/frontend/components/speedometer/angular.metergauge.min.js',
		                     'lib/d3.v4.min.js',
		                     'dashboard/frontend/components/odometer/odometer.min.js',
		                     'dashboard/frontend/components/odometer/angular.odometer.min.js',
		                     'concat/min-safe/abn_tree_directive.js',
		                     'dashboard/frontend/components/thermometer/thermometer_directive.js',
		                     'lib/ng-map.min.js'],
	            	dest: 'build/js/directives_1.min.js'
	            },
	            
	            directives_2: {
	            	src: [       'concat/min-safe/angucomplete.alt.js',
			                     'dashboard/frontend/components/toggleSwitch/angular_toggle_switch.js',
			                     'lib/rzslider.min.js',
			                     'dashboard/frontend/components/button/angular-promise-buttons.js',
			                     'lib/xeditable.min.js',
			                     'concat/min-safe/spectrum.js',
			                     'concat/min-safe/angular-spectrum-colorpicker.min.js',
			                     'concat/min-safe/tv4.js',
			                     'concat/min-safe/objectPath.js',
			                     'concat/min-safe/ui-codemirror.js',
			                     'concat/min-safe/schemaForm.js',
			                     'concat/min-safe/bootstrapDecorator.js',
			                     'concat/min-safe/bootstrap-colorpicker.min.js',
			                     'dashboardBuilder/lib/schemaForm/bootstrap-ui-select.min.js',
			                     'dashboardBuilder/lib/schemaForm/bootstrap-ui-codemirror.min.js'
			                ],
	            	dest: 'build/js/directives_2.min.js'
	            },
	            
	            components: {
	            	src: [       'concat/min-safe/wsProvider.js',
								  'concat/min-safe/httpProvider.js',
								  'concat/min-safe/dataService.js',
								  'concat/min-safe/displayCount.js',
			                     'concat/min-safe/templates.js',
			                     'concat/min-safe/chart.js',
			                     'concat/min-safe/odometer.js',
			                     'concat/min-safe/speedometer.js',
			                     'concat/min-safe/searchBox.js',
			                     'concat/min-safe/gauge.js',
			                     'concat/min-safe/ngScriptrAlert.js',
			                     'concat/min-safe/alert.js',
	                             'concat/min-safe/accelerometer.js',
			                     'concat/min-safe/toggle_switch.js',
			                     'concat/min-safe/slider.js',
			                     'concat/min-safe/button.js',
			                     'concat/min-safe/IFrame.js',
			                     'concat/min-safe/map.js',
			                     'concat/min-safe/grid.js',
			                     'concat/min-safe/autocomplete.js',
                                 'concat/min-safe/acl.js',
                                 'concat/min-safe/angular_dygraphs.js',
                                 'concat/min-safe/dygraphs.js',
								 'concat/min-safe/angular_plotly.js' ,
								'concat/min-safe/plotly.js' ,
                                'concat/min-safe/3dsurface.js' ,                        
                                'concat/min-safe/windrose.js' ,
								'concat/min-safe/metricBox.js' ,
			                     'concat/min-safe/module.js',
			                     'concat/min-safe/widgetsConfig.js',
			                     'concat/min-safe/dashboardsList.js',
			                     'concat/min-safe/dashboard.js',
			                     'dashboard/frontend/components/thermometer/thermometer.js',
			                     'dashboard/frontend/components/progressBar/progressBar.js'
			                ],
	            	dest: 'build/js/UIComponents/Components.min.js'
	            },

	            css : {
	               src : [
	                     'lib/slick.css',
	                     'lib/morris.css',
	                     'dashboard/frontend/components/chart/chart.css',
	                     'dashboard/frontend/components/searchBox/abn_tree.css',
	                     'dashboardBuilder/lib/gridster/angular_gridster.min.css',
	                     'lib/angular-material.min',
	                     'dashboard/frontend/components/odometer/odometer.car.css',
                         'dashboard/frontend/components/thermometer/style.css',
                         'dashboard/frontend/components/dygraphs/dygraphs-2.1.0.css',
	                     'lib/xeditable.min.css',
	                     'dashboardBuilder/css/dashboard.css',
	                     'dashboard/frontend/components/ACL/ACL.css',
	                     'dashboard/frontend/components/gauge/gauge.css',
	                     'dashboard/frontend/components/grid/grid.css',
	                     'dashboard/frontend/components/list/angucomplete.alt.css',
						 'dashboard/frontend/components/map/map.css',
						 'dashboard/frontend/components/plotly/windrose.css',
						 'dashboard/frontend/components/metricBox/metricBox.css',
	                     'dashboard/frontend/components/toggleSwitch/angular_toggle_switch.css',
	                     'dashboardBuilder/lib/schemaForm/select.min.css',
	                     'lib/colorpicker.min.css',
	                     'lib/rzslider.css',
	                     'dashboard/frontend/components/button/button.css',
	                     'dashboard/frontend/components/IFrame/IFrame.css',
                         'dashboard/frontend/components/accelerometer/accelerometer.css',
	                     'dashboardBuilder/lib/schemaForm/spectrum.css',
	                     'lib/codemirror.min.css',
	                     'lib/neo.min.css'
	                     ],
	               dest : 'build/css/UIComponents/Components.css'
                },
                dt_css : {
                    src : [
                          'lib/morris.css',//
                          'dashboard/frontend/components/chart/chart.css',//
                          'dashboard/frontend/components/searchBox/abn_tree.css',
                          'dashboardBuilder/lib/gridster/angular_gridster.min.css',//
                          'dashboard/frontend/components/odometer/odometer.car.css',//
                          'dashboard/frontend/components/thermometer/style.css',//
                          'dashboard/frontend/components/dygraphs/dygraphs-2.1.0.css',//
                          'dashboard/frontend/components/displayCount/count.css',//
                          'dashboard/frontend/components/grid/grid.css',//
                          'dashboard/frontend/components/map/map.css',//
                          'dashboard/frontend/components/plotly/windrose.css',//
                          'dashboard/frontend/components/metricBox/metricBox.css',//
                          'dashboard/frontend/components/toggleSwitch/angular_toggle_switch.css',//
                          'lib/rzslider.css',//
                          'dashboard/frontend/components/button/button.css',//
                          'dashboard/frontend/components/IFrame/IFrame.css',//
                          'dashboard/frontend/components/accelerometer/accelerometer.css',//
                          ],
                    dest : 'build/css/UIComponents/dt_components.css'
                 },

	         },

	         uglify : {
	        	 
		         dashboardBuilder_ide : {
			         files : files
		         },
		         
		     	dt_uglify: {
					files: {
						'build/js/external_jquery_resources.min.js': ['build/js/external_jquery_resources.min.js'],
						'build/js/dt_external_libraries1.min.js': ['build/js/dt_external_libraries1.min.js'],
						'build/js/dt_external_libraries2.min.js': ['build/js/dt_external_libraries2.min.js'],	
						'build/js/angular_resources_1.min.js': ['build/js/angular_resources_1.min.js'],
						'build/js/angular_resources_2.min.js': ['build/js/angular_resources_2.min.js'],
						'build/js/angular_resources_3.min.js': ['build/js/angular_resources_3.min.js'],
						'build/js/directives_1.min.js': ['build/js/directives_1.min.js'],
						'build/js/directives_2.min.js' : ['build/js/directives_2.min.js'],
						'build/js/UIComponents/Components.min.js': ['build/js/UIComponents/Components.min.js'],
					}
                },
                dashboardBuilder: {
					files: {
						'build/js/external_jquery_resources.min.js': ['build/js/external_jquery_resources.min.js'],
						'build/js/external_libraries.min.js': ['build/js/external_libraries.min.js'],
						'build/js/angular_resources_1.min.js': ['build/js/angular_resources_1.min.js'],
						'build/js/angular_resources_2.min.js': ['build/js/angular_resources_2.min.js'],
						'build/js/angular_resources_3.min.js': ['build/js/angular_resources_3.min.js'],
						'build/js/directives_1.min.js': ['build/js/directives_1.min.js'],
						'build/js/directives_2.min.js' : ['build/js/directives_2.min.js'],
						'build/js/dashboard_builder_constants.min.js' : ['build/js/dashboard_builder_constants.min.js'],
						'build/js/UIComponents/Components.min.js': ['build/js/UIComponents/Components.min.js'],
					}
				}
	         },

	         cssmin : {
	        	 dashboardBuilder_ide : {
		            src : 'build/css/UIComponents/Components.css',
		            dest : projectPath + 'lib/UIComponents/build/ide/css/UIComponents/Components.min.css'
		         },
	         	 dashboardBuilder : {
		            src :  'build/css/UIComponents/Components.css',
		            dest : 'build/css/UIComponents/Components.min.css'
                 },
                 dt_cssmin : {
		            src :  'build/css/UIComponents/dt_components.css',
		            dest : 'build/css/UIComponents/dt_components.min.css'
		         }
                 
	         },

	         clean : {
		         folder : [ 'concat/', 'lib/', 'build/css', 'build/javascript']
	         },
	         
	         less: {
	         	production: {
	         	    files: {
	         	      'dashboardBuilder/css/light.css': 'dashboardBuilder/css/light.less',
	         	     'dashboardBuilder/css/dark.css': 'dashboardBuilder/css/dark.less'
	         	    }
	         	  }
	         }
	      });

	var fs = require('fs');
	var path = require('path');
	var request = require('request');
	var async = require('async');

	grunt.registerMultiTask('fetch_ag_grid', function() {
		var done = this.async();
		var options = this.options({
			separator : '\n',
		});
		async.eachSeries(this.files, function(file, next) {
			var out = '';
			async.eachSeries(file.orig.src, function(url, nextUrl) {
				if (grunt.file.exists(url)) {
					// If a file
					grunt.log.writeln('Concatenating ' + url);
					out += grunt.file.read(url) + options.separator;
					nextUrl();
				} else {
					// Otherwise assume a url
					grunt.log.writeln('Downloading ' + url);
					request(url).on('data', function(data) {
						out += data.toString();
					}).on('end', function() {
						out += options.separator;
						nextUrl();
					});
				}
			}, function() {
				grunt.file.write(file.dest, out);
				grunt.log.ok('Wrote ' + file.dest + '.');
				next();
			});
		}, done);
	});

	// Load the plugin
	grunt.loadNpmTasks('grunt-fetch-from-cdn');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Run the tasks
	grunt.registerTask('buildCss', ['less:production']);
	//grunt.registerTask('default', ['fetchFromCDN']);
	grunt.registerTask('ide_dashboardBuilder', [ 'fetchFromCDN', 'fetch_ag_grid', 'ngtemplates', 'ngAnnotate', 'concat:dashboardBuilder_ide', 'concat:dashboard_template', 'concat:css', 'uglify:dashboardBuilder_ide', 'cssmin:dashboardBuilder_ide']);
	grunt.registerTask('dashboardBuilder', [ 'fetchFromCDN',
	                                         'fetch_ag_grid', 
	                                         'ngtemplates',
	                                         'ngAnnotate', 
	                                         'concat:external_jquery_resources',
	                                         'concat:external_libraries',
	                                         'concat:external_angular_resources_1',
	                                         'concat:external_angular_resources_2',
	                                         'concat:external_angular_resources_3',
	                                         'concat:directives_1',
	                                         'concat:directives_2',
											 'concat:components',
											 'concat:dashboard_builder_constants',
	                                         'concat:css',
	                                         'uglify:dashboardBuilder',
	                                         'uglify:dashboardBuilder',
                                             'cssmin:dashboardBuilder']);
    grunt.registerTask('dashboardTemplate', [ 'fetchFromCDN',
	                                         'fetch_ag_grid', 
	                                         'ngtemplates',
	                                         'ngAnnotate', 
	                                         'concat:external_jquery_resources',
											 'concat:dt_external_libraries1',
											 'concat:dt_external_libraries2',
	                                         'concat:external_angular_resources_1',
	                                         'concat:external_angular_resources_2',
	                                         'concat:external_angular_resources_3',
	                                         'concat:directives_1',
	                                         'concat:directives_2',
											 'concat:components',
	                                         'concat:dt_css',
	                                         'cssmin:dt_cssmin',
	                                         'uglify:dt_uglify']);

};
