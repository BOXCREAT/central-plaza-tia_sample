(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"definitions": [{"frames":[{"cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","url":"media/panorama_AD88B724_BC26_C001_41C9_864E1479538D_0/{face}/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3,"colCount":18},{"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_AD88B724_BC26_C001_41C9_864E1479538D_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2,"colCount":12},{"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_AD88B724_BC26_C001_41C9_864E1479538D_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_AD88B724_BC26_C001_41C9_864E1479538D_t.jpg"}],"thumbnailUrl":"media/panorama_AD88B724_BC26_C001_41C9_864E1479538D_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7","yaw":-177.2,"class":"AdjacentPanorama","select":"this.overlay_AD1F5CD0_BC22_C001_41E3_3518FC935227.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_AD1F5CD0_BC22_C001_41E3_3518FC935227"},"distance":3.93}],"class":"Panorama","overlays":["this.overlay_AD1F5CD0_BC22_C001_41E3_3518FC935227"],"hfovMin":"150%","pitch":0,"id":"panorama_AD88B724_BC26_C001_41C9_864E1479538D","partial":false,"label":trans('panorama_AD88B724_BC26_C001_41C9_864E1479538D.label'),"hfovMax":130,"hfov":360,"data":{"label":"dining"},"vfov":180},{"class":"PlayList","items":["this.PanoramaPlayListItem_AD0F2D5D_BC1E_4002_41DA_003E4A5F6C5B","this.PanoramaPlayListItem_AD0FED5D_BC1E_4002_41C8_410B64CC9E7E"],"id":"mainPlayList"},{"viewerArea":"this.MainViewer_mobile","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","aaEnabled":true,"id":"MainViewer_mobilePanoramaPlayer"},{"data":{"name":"previous"},"visible":false,"backgroundOpacity":0,"cursor":"hand","width":46,"class":"IconButton","paddingTop":0,"id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","maxHeight":46,"horizontalAlign":"center","maxWidth":46,"paddingBottom":0,"propagateClick":false,"transparencyActive":true,"minWidth":1,"shadow":false,"bottom":"35%","minHeight":1,"top":"35%","toolTipHorizontalAlign":"center","verticalAlign":"middle","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile.png","paddingLeft":0,"mode":"push","left":"2%","paddingRight":0,"borderRadius":0,"borderSize":0},{"data":{"name":"-Expand"},"visible":false,"backgroundOpacity":0,"cursor":"hand","class":"IconButton","paddingTop":0,"id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","maxHeight":46,"maxWidth":46,"paddingBottom":0,"propagateClick":false,"horizontalAlign":"center","transparencyActive":true,"minWidth":1,"shadow":false,"bottom":0,"minHeight":1,"height":46,"toolTipHorizontalAlign":"center","verticalAlign":"middle","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)","iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile.png","paddingLeft":0,"mode":"push","left":"40%","paddingRight":0,"borderRadius":0,"borderSize":0,"right":"40%"},{"frames":[{"cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","url":"media/panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7_0/{face}/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3,"colCount":18},{"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2,"colCount":12},{"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7_t.jpg"}],"thumbnailUrl":"media/panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_AD88B724_BC26_C001_41C9_864E1479538D","yaw":179.52,"class":"AdjacentPanorama","select":"this.overlay_AD12969B_BC23_C007_41E0_0B37A28259B1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_AD12969B_BC23_C007_41E0_0B37A28259B1"},"distance":3.72}],"class":"Panorama","overlays":["this.overlay_AD12969B_BC23_C007_41E0_0B37A28259B1"],"hfovMin":"150%","pitch":0,"id":"panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7","partial":false,"label":trans('panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7.label'),"hfovMax":130,"hfov":360,"data":{"label":"living area"},"vfov":180},{"playbackBarHeadShadowOpacity":0.7,"subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"playbackBarHeadShadowHorizontalLength":0,"vrPointerColor":"#FFFFFF","toolTipBorderRadius":1,"width":"100%","toolTipShadowOpacity":1,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"id":"MainViewer_mobile","playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","playbackBarOpacity":1,"toolTipTextShadowColor":"#000000","minWidth":50,"minHeight":25,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","transitionMode":"blending","progressRight":0,"playbackBarBackgroundColorDirection":"vertical","progressOpacity":1,"translationTransitionDuration":1000,"toolTipHorizontalAlign":"center","playbackBarHeadShadow":true,"progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","progressBarBackgroundColorDirection":"vertical","toolTipPaddingLeft":3,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBackgroundOpacity":1,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"borderSize":0,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","progressBarOpacity":1,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","toolTipPaddingRight":3,"progressHeight":10,"subtitlesPaddingBottom":5,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"toolTipFontStyle":"normal","subtitlesTextShadowBlurRadius":0,"toolTipShadowSpread":0,"progressBarBorderRadius":0,"toolTipTextShadowOpacity":0,"paddingTop":0,"playbackBarHeadOpacity":1,"transitionDuration":500,"toolTipFontColor":"#606060","class":"ViewerArea","paddingBottom":0,"propagateClick":false,"firstTransitionDuration":0,"toolTipPaddingBottom":2,"progressBorderRadius":0,"subtitlesOpacity":1,"progressBarBorderSize":0,"toolTipTextShadowBlurRadius":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","vrPointerSelectionTime":2000,"shadow":false,"progressBorderSize":0,"playbackBarHeadShadowColor":"#000000","progressLeft":0,"toolTipShadowColor":"#333333","toolTipShadowVerticalLength":0,"subtitlesBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","height":"100%","subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","subtitlesPaddingRight":5,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"subtitlesShadow":false,"toolTipPaddingTop":2,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"borderRadius":0,"playbackBarHeadShadowBlurRadius":1.5,"subtitlesBackgroundColor":"#000000","toolTipOpacity":1,"playbackBarProgressOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":1,"paddingRight":0,"paddingLeft":0,"playbackBarBottom":5,"subtitlesEnabled":true,"playbackBarHeadWidth":6,"subtitlesPaddingTop":5,"playbackBarProgressBorderSize":0},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_B3C8E127_BC26_400F_41DB_96B17871BA35","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_AD88B724_BC26_C001_41C9_864E1479538D_camera"},{"class":"MediaAudio","loop":false,"audio":{"class":"AudioResource","oggUrl":"media/audio_AFC62E40_BB87_4FBB_41B6_A21469E297F1.ogg","mp3Url":"media/audio_AFC62E40_BB87_4FBB_41B6_A21469E297F1.mp3"},"autoplay":true,"data":{"label":"y2mate.com - Jazz Music 1 No Copyright"},"id":"audio_AFC62E40_BB87_4FBB_41B6_A21469E297F1"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_B3E34697_BC22_400F_41E1_97E9786BA6F6","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7_camera"},{"easing":"linear","duration":100,"class":"FadeOutEffect","id":"effect_3A451B34_1C82_9908_41AD_37B1C5A316C2"},{"data":{"name":"next"},"visible":false,"backgroundOpacity":0,"cursor":"hand","width":46,"class":"IconButton","paddingTop":0,"id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile","maxHeight":46,"horizontalAlign":"center","maxWidth":46,"paddingBottom":0,"propagateClick":false,"transparencyActive":true,"minWidth":1,"shadow":false,"bottom":"35%","minHeight":1,"top":"35%","toolTipHorizontalAlign":"center","verticalAlign":"middle","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile.png","paddingLeft":0,"mode":"push","paddingRight":0,"borderRadius":0,"borderSize":0,"right":"2%"},{"areas":["this.HotspotPanoramaOverlayArea_AD12ACD5_BC22_C003_41D9_A1D4F4F8399A"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle 03b"},"useHandCursor":true,"items":[{"distance":100,"yaw":-177.2,"vfov":2.65,"horizontalAlign":"center","hfov":6.04,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AD01FB77_BC1E_400E_41CF_E55508BE2082","pitch":-23.37,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_AD1F5CD0_BC22_C001_41E3_3518FC935227"},{"class":"PanoramaPlayListItem","camera":"this.panorama_AD88B724_BC26_C001_41C9_864E1479538D_camera","media":"this.panorama_AD88B724_BC26_C001_41C9_864E1479538D","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_AD0F2D5D_BC1E_4002_41DA_003E4A5F6C5B"},{"class":"PanoramaPlayListItem","camera":"this.panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7_camera","media":"this.panorama_ADBFFDEB_BC22_4007_41E2_E14ADCEBCBE7","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_AD0FED5D_BC1E_4002_41C8_410B64CC9E7E"},{"areas":["this.HotspotPanoramaOverlayArea_AD3E16BD_BC23_C002_41E0_CC7E52D2A2F9"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle 03b"},"useHandCursor":true,"items":[{"distance":100,"yaw":179.52,"vfov":2.79,"horizontalAlign":"center","hfov":7.46,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 03b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_AD01CB77_BC1E_400E_41AA_3B60D2DE1735","pitch":-24.57,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_AD12969B_BC23_C007_41E0_0B37A28259B1"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false,"id":"sequence_B3C8E127_BC26_400F_41DB_96B17871BA35"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false,"id":"sequence_B3E34697_BC22_400F_41E1_97E9786BA6F6"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD0FED5D_BC1E_4002_41C8_410B64CC9E7E, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_AD12ACD5_BC22_C003_41D9_A1D4F4F8399A"},{"class":"AnimatedImageResource","levels":[{"height":264,"width":432,"class":"ImageResourceLevel","url":"media/res_AD1FFCEC_BC22_4001_41DA_8DE9ADC078AE_0.png"}],"colCount":4,"id":"AnimatedImageResource_AD01FB77_BC1E_400E_41CF_E55508BE2082","rowCount":6,"frameDuration":41,"frameCount":24},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AD0F2D5D_BC1E_4002_41DA_003E4A5F6C5B, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_AD3E16BD_BC23_C002_41E0_CC7E52D2A2F9"},{"class":"AnimatedImageResource","levels":[{"height":264,"width":432,"class":"ImageResourceLevel","url":"media/res_AD1FFCEC_BC22_4001_41DA_8DE9ADC078AE_0.png"}],"colCount":4,"id":"AnimatedImageResource_AD01CB77_BC1E_400E_41AA_3B60D2DE1735","rowCount":6,"frameDuration":41,"frameCount":24}],"data":{"name":"Player486","defaultLocale":"en","initialScale":0.5,"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1},"locales":{"en":"locale/en.txt"}},"gap":10,"defaultVRPointer":"laser","mediaActivationMode":"window","layout":"absolute","backgroundOpacity":1,"vrPolyfillScale":0.5,"width":"100%","paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"class":"Player","paddingBottom":0,"propagateClick":false,"scrollBarMargin":2,"horizontalAlign":"left","scripts":{"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"existsKey":TDV.Tour.Script.existsKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"openLink":TDV.Tour.Script.openLink,"getMediaByName":TDV.Tour.Script.getMediaByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"init":TDV.Tour.Script.init,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowScore":TDV.Tour.Script.quizShowScore,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"playAudioList":TDV.Tour.Script.playAudioList,"setValue":TDV.Tour.Script.setValue,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showWindow":TDV.Tour.Script.showWindow,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"initQuiz":TDV.Tour.Script.initQuiz,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"downloadFile":TDV.Tour.Script.downloadFile,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPixels":TDV.Tour.Script.getPixels,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setLocale":TDV.Tour.Script.setLocale,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio},"mobileMipmappingEnabled":false,"minWidth":20,"shadow":false,"minHeight":20,"scrollBarOpacity":0.5,"contentOpaque":false,"toolTipHorizontalAlign":"center","verticalAlign":"top","height":"100%","scrollBarWidth":10,"overflow":"hidden","backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","borderRadius":0,"backgroundPreloadEnabled":true,"scrollBarVisible":"rollOver","paddingRight":0,"paddingLeft":0,"downloadEnabled":false,"borderSize":0,"start":"this.playAudioList([this.audio_AFC62E40_BB87_4FBB_41B6_A21469E297F1], true); this.init()","desktopMipmappingEnabled":false,"left":558.9,"backgroundColorDirection":"vertical","children":["this.MainViewer_mobile","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile"]};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sun Feb 18 2024