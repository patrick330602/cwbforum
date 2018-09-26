## 数据库

comments.js
| Name | Type | Required? |
| ---- | ---- | --------- |
| belongTo | String |  |
| author | String | |
| content | String |  |
| createdAt | Date |  |
| modifiedAt | Date |  |

posts.js
| Name | Type | Required? |
| ---- | ---- | --------- |
| title | String |  |
| author | String |  |
| type | Number |  |
| content | String |  |
| createdAt | Date |  |
| modifiedAt | Date|  |

boards.js
| Name | Type | Required? |
| ---- | ---- | --------- |
| type | Number |  |
| title | String |  |
| intro | String |  |
| description | String |  |
| StickyPosts | Object Array |  |

users.js
| Name | Type | Required? |
| ---- | ---- | --------- |
| username | String |  |
| password | String |  |
| wechatId | String |  |
| wechatAccessToken | String |  |
| wechatRefreshToken | String |  |
| email | String |  |
| category | Number |  |

微信获取用户资讯：
https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID


