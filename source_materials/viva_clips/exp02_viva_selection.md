# EXP02 selection audit

| Field | Value |
|-------|-------|
| Condition | Maximin (formal welfare branch) |
| Seed | 920101 |
| Scenario | H1_00159 (same as EXP01) |
| Clip | steps 42–72 |

## Why selected
Maximin checkpoint loads and completes successfully on familiar scenario; terminal bonus R^W = λ(W(U)−1) with W(U)=min_i U_i is revealed at episode end.

## Terminal values (code-derived)
- U: {'V0': 0.9992476202352746, 'V1': 0.9905428867609105, 'V2': 1.0, 'V3': 0.994753086419753}
- W(U) = min U = 0.9905
- R^W = -0.0095

## What this does NOT demonstrate
Does not prove terminal timing alone caused EXP02 fairness failure.

## Validation
{'utility_match': True, 'burden_match': True, 'gini_match': True, 'welfare_fn_available': True, 'ggi': 0.994492604677345, 'term_reason': 'success', 'warnings': [], 'passed': True}
