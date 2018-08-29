# 引入 numpy、pd 和 sklearn(scikit-learn) 模組
import numpy as np
import pandas as pd
from sklearn import datasets
# 引入 train_test_split 分割方法，注意在 sklearn v0.18 後 train_test_split 從 sklearn.cross_validation 子模組搬到 sklearn.model_selection 中
from sklearn.model_selection import train_test_split
# 引入 KNeighbors 模型
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import LinearSVC
# 引入 iris 資料集
raw_iris = datasets.load_iris()

''' 只是印出資料集
# 探索性分析 Exploratory data analysis，了解資料集內容
# 先印出 key 值，列出有哪些值：['data', 'target', 'target_names', 'DESCR', 'feature_names']
print(raw_iris.keys())
# 印出 feature 值
print(raw_iris['data'])
# 印出目標值，分別對應的是三種花的類別：['setosa 山鳶尾' 'versicolor 變色鳶尾' 'virginica 維吉尼亞鳶尾']
print(raw_iris['target'])
# 印出目標標籤，三種花的類別：['setosa' 'versicolor' 'virginica']
print(raw_iris['target_names'])
# 印出資料集內容描述
print(raw_iris['DESCR'])
# 印出屬性名稱，['sepal length 花萼長度 (cm)', 'sepal width 花萼寬度 (cm)', 'petal length 花蕊長度 (cm)', 'petal width 花蕊寬度 (cm)']
print(raw_iris['feature_names'])
# 類別種類
print(np.unique(raw_iris['target']))
'''

# 將資料轉為 pandas DataFrame
# data 為觀察目標變數
df_X = pd.DataFrame(raw_iris['data'])
# target 為預測變數
df_y = pd.DataFrame(raw_iris['target'])
# 將資料切分為 training data 和 testing data
# 其中 random_state 若設為 0 或不設則即便實例不同但因種子相同產生同樣隨機編號
# 若設為 1 則每次隨機產生不同編號
# test_size 為切分 training data 和 testing data 的比例
X_train, X_test, y_train, y_test = train_test_split(df_X, df_y, test_size=0.3)

# 印出所有資料集筆數
print(len(df_y))
# 印出切分 y_train 的數量為所有資料集的 70%，共 105 筆
print(y_train)
print(len(y_train))
# 印出切分的 y_test 資料為所有資料集的 30%，共 45 筆
print(y_test)
print(len(y_test))

# 初始化 LinearSVC 實例
lin_clf = LinearSVC()
# 使用 fit 來建置模型，其參數接收 training data matrix, testing data array，所以進行 y_train.values.ravel() Data Frame 轉換
lin_clf.fit(X_train, y_train.values.ravel())

# 初始化 KNeighborsClassifier 實例
knn = KNeighborsClassifier()
# 使用 fit 來建置模型，其參數接收 training data matrix, testing data array，所以進行 y_train.values.ravel() 轉換
knn.fit(X_train, y_train.values.ravel())

# 使用 X_test 來預測結果
print(lin_clf.predict(X_test))
# 印出預測準確率
print(lin_clf.score(X_test, y_test))

# 使用 X_test 來預測結果
print(knn.predict(X_test))
# 印出 testing data 預測標籤機率
print(knn.predict_proba(X_test))
# 印出預測準確率
print(knn.score(X_test, y_test))

