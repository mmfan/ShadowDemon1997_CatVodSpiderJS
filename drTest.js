import './lib/util.js';
import './lib/dayjs.min.js'
import './lib/uri.min.js';
import './lib/crypto-js.js'
import _ from './lib/underscore-esm-min.js';
import cheerio from './lib/cheerio.min.js';
import { muban } from './dr/模板.js';

muban.首图2.二级.tabs = '.stui-pannel__head h3';
muban.首图2.二级.content = '.stui-content__desc&&Text';

muban.首图2.二级.tabs = '.stui-pannel__head.bottom-line.active.clearfix h3';
var rule = Object.assign(muban.首图2,{
title:'真不卡',
host:'https://www.zbkk.net',
url:'/vodshow/fyclass--------fypage---.html',
class_parse:'.stui-header__menu .dropdown li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
// searchUrl:'/vodsearch/**----------fypage---.html',
});

// rule = {
//     title: '360影视',
//     host: 'https://www.360kan.com',
//     homeUrl: 'https://api.web.360kan.com/v1/rank?cat=2&size=9',
//     detailUrl: 'https://api.web.360kan.com/v1/detail?cat=fyclass&id=fyid',
//     searchUrl: 'https://api.so.360kan.com/index?force_v=1&kw=**&from=&pageno=fypage&v_ap=1&tab=all',
//     url: 'https://api.web.360kan.com/v1/filter/list?catid=fyclass&rank=rankhot&cat=&year=&area=&act=&size=35&pageno=fypage&callback=',
//     headers: {
//         'User-Agent': 'MOBILE_UA'
//     },
//     timeout: 5000,
//     class_name: '电视剧&电影&综艺&动漫',
//     class_url: '2&1&3&4',
//     limit: 5,
//     multi: 1,
//     searchable: 2,
//     play_parse: true,
//     lazy: 'js:input=input.split("?")[0];log(input);',
//     // 疑似t4专用的
//     // lazy:'js:input={parse: 1, playUrl: "", jx: 1, url: input.split("?")[0]}',
//     // 手动调用解析请求json的url,此lazy不方便
//     // lazy:'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
//     推荐: 'json:data;title;cover;comment;cat+ent_id;description',
//     一级: 'json:data.movies;title;cover;pubdate;id;description',
//     // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites;data.playlinksdetail.#idv.quality","lists":"data.playlinksdetail.#idv.default_url"},
//     // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites","lists":"data.playlinksdetail.#idv.default_url"},
//     二级: 'js:let html=JSON.parse(fetch(input,fetch_params));let data=html.data;let tilte=data.title;let img=data.cdncover;let vod_type=data.moviecategory.join(",");let area=data.area.join(",");let director=data.director.join(",");let actor=data.actor.join(",");let content=data.description;base_vod={vod_id:input,vod_name:tilte,type_name:vod_type,vod_actor:actor,vod_director:director,vod_content:content,vod_remarks:area,vod_pic:urljoin2(input,img)};let delta=200;let vod_play={};let sites=data.playlink_sites;for(let i in sites){let site=sites[i];let playList="";let vodItems=[];if(data.allupinfo){let total=parseInt(data.allupinfo[site]);for(let j=1;j<total;j+=delta){let end=Math.min(total,j+delta-1);let url2=buildUrl(input,{start:j,end:end,site:site});let vod_data=JSON.parse(fetch(url2),fetch_params).data;if(vod_data.allepidetail){vod_data=vod_data.allepidetail[site];vod_data.forEach(function(item,index){vodItems.push((item.playlink_num||"")+"$"+urlDeal(item.url||""))})}else{vod_data=vod_data.defaultepisode;vod_data.forEach(function(item,index){vodItems.push((item.period||"")+(item.name||"")+"$"+urlDeal(item.url)||"")})}}}else{let item=data.playlinksdetail[site];vodItems.push((item.sort||"")+"$"+urlDeal(item.default_url||""))}if(vodItems.length>0){playList=vodItems.join("#")}if(playList.length<1){continue}vod_play[site]=playList}let tabs=Object.keys(vod_play);let playUrls=[];for(let id in tabs){playUrls.push(vod_play[tabs[id]])}if(tabs.length>0){vod_play_from=tabs.join("$$$");vod_play_url=playUrls.join("$$$");base_vod.vod_play_from=vod_play_from;base_vod.vod_play_url=vod_play_url}vod=base_vod;',
//     // 二级:'js:let html=JSON.parse(fetch(input,fetch_params));let data=html.data;let tilte=data.title;let img=data.cdncover;let vod_type=data.moviecategory.join(",");let area=data.area.join(",");let director=data.director.join(",");let actor=data.actor.join(",");let content=data.description;base_vod={vod_id:input,vod_name:tilte,type_name:vod_type,vod_actor:actor,vod_director:director,vod_content:content,vod_remarks:area,vod_pic:urljoin2(input,img)};let delta=200;let vod_play={};let sites=data.playlink_sites;for(let i in sites){let site=sites[i];let playList="";let vodItems=[];if(data.allupinfo){let total=parseInt(data.allupinfo[site]);for(let j=1;j<total;j+=delta){let end=Math.min(total,j+delta-1);let url2=buildUrl(input,{start:j,end:end,site:site});let vod_data=JSON.parse(fetch(url2),fetch_params).data;if(vod_data.allepidetail){vod_data=vod_data.allepidetail[site];vod_data.forEach(function(item,index){vodItems.push((item.playlink_num||"")+"$"+(item.url||""))})}else{vod_data=vod_data.defaultepisode;vod_data.forEach(function(item,index){vodItems.push((item.period||"")+(item.name||"")+"$"+item.url||"")})}}}else{let item=data.playlinksdetail[site];vodItems.push((item.sort||"")+"$"+(item.default_url||""))}if(vodItems.length>0){playList=vodItems.join("#")}if(playList.length<1){continue}vod_play[site]=playList}let tabs=Object.keys(vod_play);let playUrls=[];for(let id in tabs){playUrls.push(vod_play[tabs[id]])}if(tabs.length>0){vod_play_from=tabs.join("$$$");vod_play_url=playUrls.join("$$$");base_vod.vod_play_from=vod_play_from;base_vod.vod_play_url=vod_play_url}vod=base_vod;',
//     // 搜索:'json:data.longData.rows;titleTxt;cover;cat_name;cat_id+en_id;description',
//     搜索: 'json:data.longData.rows;titleTxt||titlealias;cover;cat_name;cat_id+en_id;description',
// }
const MOBILE_UA = 'Mozilla/5.0 (Linux; Android 11; M2007J3SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36';
const PC_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36';
const UA = 'Mozilla/5.0';
const UC_UA = 'Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36';
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const RULE_CK = 'cookie_' + rule.title; // 源cookie
const CATE_EXCLUDE = '首页|留言|APP|下载|资讯|新闻|动态';
const TAB_EXCLUDE = '猜你|喜欢|APP|下载|剧情';

const SELECT_REGEX = /:eq|:lt|:gt|#/g;
const SELECT_REGEX_A = /:eq|:lt|:gt/g;

const $ = cheerio.load('');

function init(ext) {
    // check default val
    rule.title = rule.title || '';
    rule.id = rule.id || rule.title;
    rule.host = rule.host || '';
    rule.host = rule.host.rstrip('/');
    rule.timeout = rule.timeout || 5000;
    rule.url = rule.url || '';
    rule.homeUrl = rule.homeUrl || '/';
    rule.detailUrl = rule.detailUrl || '';
    rule.searchUrl = rule.searchUrl || '';
    rule.headers = rule.headers || {};
    // check replace UA
    let hasUA = false
    for (const k in rule.headers) {
        if (k.toLowerCase() == 'user-agent') {
            let v = rule.headers[k];
            if (v == 'MOBILE_UA')
                rule.headers[k] = MOBILE_UA;
            else if (v == 'PC_UA')
                rule.headers[k] = PC_UA;
            else if (v == 'UC_UA')
                rule.headers[k] = UC_UA;
            else if (v == 'IOS_UA')
                rule.headers[k] = IOS_UA;
            hasUA = true
        }
    }
    if (!hasUA) {
        rule.headers['User-Agent'] = UA;
    }
    rule.cate_exclude = (rule.cate_exclude || '') + CATE_EXCLUDE;
    rule.tab_exclude = (rule.tab_exclude || '') + TAB_EXCLUDE;
    rule.homeUrl = rule.host && rule.homeUrl ? urljoin(rule.host, rule.homeUrl) : (rule.homeUrl ? rule.homeUrl : rule.host)
    if (rule.url.indexOf('[') > -1 && rule.url.indexOf(']') > -1) {
        u1 = rule.url.split('[')[0]
        u2 = rule.url.split('[')[1].split(']')[0]
        rule.url = rule.host && rule.url ? (urljoin(rule.host, u1) + '[' + urljoin(rule.host, u2) + ']') : rule.url
    } else {
        rule.url = rule.host && rule.url ? urljoin(rule.host, rule.url) : rule.url
    }
    rule.detailUrl = rule.host && rule.detailUrl ? urljoin(rule.host, rule.detailUrl) : (rule.detailUrl ? rule.detailUrl : rule.host)
    rule.searchUrl = rule.host && rule.searchUrl ? urljoin(rule.host, rule.searchUrl) : (rule.searchUrl ? rule.searchUrl : rule.host)
    rule.class_name = rule.class_name || '';
    rule.class_url = rule.class_url || '';
    rule.class_parse = rule.class_parse || '';
    rule.filter_name = rule.filter_name || '';
    rule.filter_url = rule.filter_url || '';
    rule.filter_parse = rule.filter_parse || '';
    rule.double = rule.double || false;
    rule.一级 = rule.一级 || '';
    rule.二级 = rule.二级 || '';
    rule.搜索 = rule.搜索 || '';
    rule.推荐 = rule.推荐 || '';
    rule.编码 = rule.编码 || 'utf-8';
    rule.encoding = rule.编码;
    rule.limit = rule.limit || 6;
    rule.filter = rule.filter || [];
}

function request(url, headers, timeout) {
    let res = req(url, {
        headers: headers,
        timeout: timeout
    });
    return res;
}

function pjfh(html, parse, base_url) {
    if (!parse || !parse.trim())
        return '';
    if (typeof (html) === 'string')
        html = JSON.parse(html)
    parse = parse.trim()
    if (!parse.startsWith('$.'))
        parse = '$.' + parse;
    parse = parse.split('||')
    for (let ps of parse) {
        let ret = $.jp(ps, html);
        if (Array.isArray(ret))
            ret = ret[0] || ''
        else
            ret = ret || ''
        if (ret && typeof (ret) !== 'string')
            ret = ret.toString();
        if (base_url && ret && ret)
            ret = urljoin(base_url, ret);
        console.log(ret)
        if (ret && ret)
            return ret;
    }
    return '';
}

function pjfa(html, parse) {
    if (!parse || !parse.trim())
        return '';
    if (typeof (html) === 'string')
        html = JSON.parse(html)
    parse = parse.trim()
    if (!parse.startsWith('$.'))
        parse = '$.' + parse
    let ret = $.jp(parse, html)
    if (Array.isArray(ret) && Array.isArray(ret[0]) && ret.length === 1)
        return ret[0] || []
    return ret || []
}

const DOM_CHECK_ATTR = ['url', 'src', 'href', 'data-original', 'data-src'];

function pdfh(html, parse, base_url) {
    if (!parse || !parse.trim())
        return ''
    let option = undefined;
    if (parse.indexOf('&&') > -1) {
        let sp = parse.split('&&');
        option = sp[sp.length - 1];
        sp.splice(sp.length - 1);
        if (sp.length > 1) {
            for (const i in sp) {
                if (!SELECT_REGEX.test(sp[i])) {
                    sp[i] = sp[i] + ':eq(0)';
                }
            }
        } else {
            if (!SELECT_REGEX.test(sp[0])) {
                sp[0] = sp[0] + ':eq(0)';
            }
        }
        parse = sp.join(' ');
    }
    let result = '';
    let ret = $(parse, html);
    if (option) {
        if (option === 'Text')
            result = $(ret).text();
        else if (option === 'Html')
            result = $(ret).html();
        else
            result = $(ret).attr(option);
        if (result && base_url && DOM_CHECK_ATTR.indexOf(option) > -1) {
            let idx = result.indexOf('http');
            if (idx > -1) {
                result = result.substring(idx)
            } else {
                result = urljoin(base_url, result);
            }
        }
    } else {
        result = $(ret).toString();
    }
    return result;
}

function pdfa(html, parse) {
    if (!parse || !parse.trim())
        return [];
    if (parse.indexOf('&&') > -1) {
        let sp = parse.split('&&');
        for (const i in sp) {
            if (!SELECT_REGEX_A.test(sp[i]) && i < sp.length - 1) {
                sp[i] = sp[i] + ':eq(0)';
            }
        }
        parse = sp.join(' ');
    }
    let ret = $(parse, html);
    return ret;
}

function dealJson(html) {
    try {
        return html.match(/[\w|\W|\s|\S]*?(\{[\w|\W|\s|\S]*\})/).group[1]
    } catch (error) {
    }
    return html;
}

function home(filter) {
    let classes = [];
    let videos = [];
    if (rule.class_url && rule.class_name) {
        let class_names = rule.class_name.split('&');
        let class_urls = rule.class_url.split('&');
        let cnt = Math.min(class_names.length, class_names.length);
        for (let i = 0; i < cnt; i++) {
            classes.push({
                'type_name': class_names[i],
                'type_id': class_urls[i],
            });
        }
    }
    if (rule.homeUrl && rule.homeUrl.startsWith('http')) {
        let res = request(rule.homeUrl, rule.headers, rule.timeout);
        if (res.content && rule.class_parse) {
            classes = []
            let p = rule.class_parse.split(';');
            let html = res.content;
            let items = pdfa(html, p[0]);
            for (const item of items) {
                let title = pdfh(item, p[1])
                if (rule.cate_exclude.indexOf(title) > -1)
                    continue;
                let url = pdfh(item, p[2], rule.url);
                let tag = url;
                if (p.length > 3 && p[3].trim()) {
                    let regex = new RegExp(String.raw`${p[3]}`);
                    let match = url.match(regex);
                    if (!match)
                        continue;
                    tag = match[1];
                }
                classes.push({
                    'type_name': title,
                    'type_id': tag,
                });
            }
        }
        if (res.content) {
            videos = getHomeVod(res.content);
        }
    }
    console.log(classes);
    return JSON.stringify({
        'class': classes,
        'list': videos,
    });
}

function getHomeVod(html) {
    let p = rule.推荐.trim();
    if (!p)
        return [];
    let videos = [];
    let is_js = p.startsWith('js:');
    if (is_js) {
        const input = rule.homeUrl;
        const HOST = rule.host;
        const oheaders = rule.headers;
        const fetch_params = { 'headers': rule.headers, 'timeout': rule.timeout, 'encoding': rule.encoding };
    } else {
        p = p.split(';');
        if (!rule.double && p.length < 5) {
            return [];
        }
        if (rule.double && p.length < 6) {
            return [];
        }
        let is_json = p[0].startsWith('json:');
        let _ph = pdfh;
        let _pa = pdfa;
        if (is_json) {
            html = dealJson(html);
            _ph = pjfh;
            _pa = pjfa;
        }
        if (rule.double) {
            let items = _pa(html, is_json ? p[0].substring(5) : p[0]);
            for (const item of items) {
                let items2 = _pa(item, p[1]);
                for (const item2 of items2) {
                    let title = _ph(item2, p[2]);
                    let img = '';
                    try {
                        img = _ph(item2, p[3], rule.homeUrl);
                    } catch (error) {

                    }
                    let desc = _ph(item2, p[4]);
                    let links = [];
                    for (const p5 of p[5].split('+')) {
                        links.push(!rule.detailUrl ? _ph(item2, p5, true, rule.homeUrl) : _ph(item2, p5, false, ''))
                    }
                    let link = links.join('$');
                    videos.push({
                        "vod_id": link,
                        "vod_name": title,
                        "vod_pic": img,
                        "vod_remarks": desc
                    })
                }
            }
        } else {
            let items = _pa(html, is_json ? p[0].substring(5) : p[0]);
            for (const item of items) {
                let title = _ph(item, p[1]);
                let img = '';
                try {
                    img = _ph(item, p[2], true, rule.homeUrl);
                } catch (error) {

                }
                let desc = _ph(item, p[3]);
                let links = [];
                for (const p4 of p[4].split('+')) {
                    links.push(!rule.detailUrl ? _ph(item, p4, rule.homeUrl) : _ph(item, p4))
                }
                let link = links.join('$');
                videos.push({
                    "vod_id": link,
                    "vod_name": title,
                    "vod_pic": img,
                    "vod_remarks": desc
                })
            }
        }
    }
    return videos;
}

function homeVod() {
    return '';
}

function category(tid, pg, filter, extend) {
}

function detail(id) {
}

function play(flag, id, flags) {
}

function search(wd, quick) {
}

globalThis.drTest = {
    init: init,
    home: home,
    homeVod: homeVod,
    category: category,
    detail: detail,
    play: play,
    search: search
}